// Sayfa açılırken yumuşak görünme efekti
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// Başlık aşağı kaydırınca küçülsün
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 60) {
        header.style.padding = "12px 8%";
        header.style.background = "#0a0a0a";
    } else {
        header.style.padding = "20px 8%";
        header.style.background = "#111";
    }
});
