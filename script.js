const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.background="#0b0f15";
    }else{
        header.style.background="rgba(13,17,23,.95)";
    }

});
