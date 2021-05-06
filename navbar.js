let menuIsVisible = false;
function menuDisplay(){
    let menu = document.querySelector(".menu");
    menuIsVisible ? menu.style.left = "-80vw" : menu.style.left = "0"
    menuIsVisible = !menuIsVisible;
    menu.classList.toggle("burger--active");
}