const hamburgerMenu = document.querySelector(".hamburger");

window.addEventListener("resize", function () {
    if (window.matchMedia("(min-width: 992px)").matches) {
        if (navMenu.classList.contains("ham-ham-nav")) {
            navMenu.classList.remove("ham-ham-nav");
            mainMenu.classList.remove("ham-main-menu");
            header.classList.remove("ham-header");
            logo.classList.remove("ham-logo");
            topMenu.classList.remove("ham-top-menu");
            for (let i = 0; i < mainli.length; i++) {
                mainli[i].classList.remove("ham-ul-li");
            }
        }
    }

    if (window.matchMedia("max-width: 991px")) {
//
    }
})