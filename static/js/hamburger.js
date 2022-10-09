const navMenu    = document.querySelector(".hamburger-nav");
const topMenu    = document.querySelector(".top-menu");
const slash      = document.querySelectorAll(".slash");
const mainMenu   = document.querySelector(".main-menu");
const header     = document.getElementById("menu");
const navigation = document.querySelector("#navigation");
const mainli     = document.querySelectorAll(".main-li");
const logo       = document.getElementById('logo');
const hiddenMenu = document.getElementById("hidden-menu");
const arrow      = document.getElementById("press-down");


navMenu.addEventListener("click", () => {
    //console.log(hiddenMenu);

    /*Main menu settings*/
    if (window.getComputedStyle(mainMenu).opacity === "0") {
        navMenu.classList.toggle("ham-ham-nav");
        mainMenu.classList.toggle("ham-main-menu");
        header.classList.toggle("ham-header");
        navigation.style.transition = ".3s";
        logo.classList.toggle("ham-logo");
        topMenu.classList.toggle("ham-top-menu");

        for (let i = 0; i < mainli.length; i++) {
            mainli[i].classList.toggle("ham-ul-li");
        }

    } else if (window.getComputedStyle(mainMenu).textAlign === "center") {
        navMenu.classList.toggle("ham-ham-nav");
        topMenu.classList.toggle("ham-top-menu");
        mainMenu.classList.toggle("ham-main-menu");
        header.classList.toggle("ham-header");
        navigation.classList.toggle("ham-nav");
        logo.classList.toggle("ham-logo");
        for (let i = 0; i < mainli.length; i++) {
            mainli[i].classList.toggle("ham-ul-li");
        }
    }
})

function hidemenu() {
    hiddenMenu.classList.toggle("ham-second-menu");
    arrow.classList.toggle("press-up");
}

/* Comments */
/*Top menu settings*/
// if (window.getComputedStyle(topMenu).display === "none") {
//     topMenu.style.display = "flex";
//     topMenu.style.flexDirection = "column";
//
//     for (let i = 0; i<slash.length; i++) {
//         slash[i].style.display = "none";
//     }
//
//     //topMenu.classList.toggle("active");
// } else if (window.getComputedStyle(topMenu).display === "flex") {
//     topMenu.style.display = "none";
//     topMenu.style.flexDirection = "row";
//     for (let i = 0; i<slash.length; i++) {
//         slash[i].style.display = "block";
//     }
// }
/*Header styling*/
// header.style.padding  = "0rem 0rem 2rem 0rem";
// header.style.zIndex   = "3";
// header.style.margin   = "0rem 0em 0rem 0rem";
// header.style.width    = "100%";
// header.style.position = "fixed";
//
// /*navigation styling*/
// navigation.style.margin  = "0rem 0rem 0rem 0rem";
// navigation.style.padding = "0";
// navigation.style.width   = "100%";
//
// /*hamburger menu styling*/
// navMenu.style.margin = "0rem 0rem 10rem 0rem";
//
// /*logo styling*/
// logo.style.alignItems = "inherit";
// logo.style.margin     = "-10rem 0rem 0rem 0rem";
//
// /*.mainmenu styling*/
// mainMenu.style.display   = "unset";
// mainMenu.style.margin    = "11rem 0rem 0rem 0rem";
// mainMenu.style.textAlign = "center";
// mainMenu.style.padding   = "0";


// console.log("yoehoee");
// for (let i = 0; i < mainli.length; i++) {
//     mainli[i].style.display = "none";
// }
// mainMenu.style.display   = "none";
// navMenu.style.margin = "0rem 0rem 0rem 0rem";
// logo.style.margin    = "0rem 0rem 0rem 0rem";
//
//