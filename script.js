// ================================
// AYGAR OTO PREMIUM SCRIPT V1
// ================================

// Mobil Menü
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}

// Menüye tıklayınca kapansın
document.querySelectorAll("#nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});

// Header Scroll Efekti
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        header.style.background = "rgba(5,10,20,.98)";
        header.style.padding = "12px 7%";
    } else {
        header.style.background = "rgba(10,18,40,.92)";
        header.style.padding = "18px 7%";
    }

});

// Scroll Animasyonu
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});
