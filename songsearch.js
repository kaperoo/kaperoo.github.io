function findSong(){
    fetch('./songs.json')
    .then( res => res.json())
    .then(data => {

        $(document).ready(function() {
            $("#foundSongs").html("");
            var string = $("#ssong").val();
            for(i=0;i<data["songs"].length;i++){
                if(string == ""){
                    break;
                }
                if(data["songs"][i]["title"].toLowerCase().includes(string.toLowerCase())){
                    $("#foundSongs").append("<a href='" + data["songs"][i]["page"] + "'><div class='song'><span id='songTitle'>" + data["songs"][i]["title"] + "</span><br>" + 
                     "<span id='songAlbum'>" + data["songs"][i]["album"] + "</span><br>" + "<span id='songYear'>" + data["songs"][i]["year"] + "</span>" + "</div></a>");
                }
            }
        });
    });
}