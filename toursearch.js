var long;
var lat;
var doc = document.getElementById("shows");
var count = 0;

function findTour(){
    count += 5;
    navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position){
    lat = position.coords.latitude;
    long = position.coords.longitude;

    fetch('./tours.json')
    .then( res => res.json(),console.log(Error))
    .then(data => {

        var distance = [];
        doc.innerHTML = "";

        for(i=0;i<data["places"].length;i++){
            distance.push(distanceInKm(lat,long,data["places"][i]["lat"],data["places"][i]["long"]));
        }

        var distanceSorted = [...distance];
        distanceSorted.sort();

        if(count>distance.length){
            count = distance.length;
        }

        for(i=0;i<count;i++){
            for(j=0;j<distance.length;j++){
                if(distance[j]==distanceSorted[i]){
                    doc.innerHTML += "<div class='place'><span id='name'>" + data["places"][j]["name"] + ": </span>" + "<br><span id='loc'>" + data["places"][j]["place"] + 
                    " </span><br>"+ "<span id='date'>" + data["places"][j]["date"] + 
                    " </span>" + "<span id='kms'>" + Math.round(distance[j]) + "km away from you.</span>" + "</div>";
                }
            }
        }
    });
}

function distanceInKm(lat,long,lat2,long2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat);  // deg2rad below
    var dLon = deg2rad(long2-long); 
    var a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(lat)) * Math.cos(deg2rad(lat2)) * 
        Math.sin(dLon/2) * Math.sin(dLon/2); 

    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
}
  
function deg2rad(deg) {
    return deg * (Math.PI/180)
}