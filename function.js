var menuIcon = document.querySelector(".menu__icon");
var navBar = document.querySelector("header nav");

menuIcon.addEventListener("click", function(){
    navBar.classList.toggle("active")
    console.log("clicked");
})