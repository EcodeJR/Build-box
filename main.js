const nav = document.querySelector('#nav');
const bar = document.querySelector('#bar');

nav.style.maxHeight = "0px";

function togglemenu() {
    if (nav.style.maxHeight == "0px") {
        nav.style.maxHeight = "550px";
        nav.style.display = "flex";
    } else {
        nav.style.maxHeight = "0px";
        nav.style.display = "none";
    }
};


//active nav

const li = document.querySelectorAll(".link");
const sec = document.querySelectorAll("section");

function activeMenu() {
    let len = sec.length;
    while (--len && window.scrollY + 100 < sec[len].offsetTop) {}
    li.forEach(ltx => ltx.classList.remove("active"));
    li[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);


//Scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}

//loader

var loader = document.getElementById("loader");

window.addEventListener("load", function() {
    loader.style.display = "none";
});