const btnBurger = document.querySelector("#btn");
const body = document.querySelector("body");
let lastScroll = 0;
btnBurger.addEventListener("click", () => {
    btnBurger.classList.toggle("active");
    nav.classList.toggle("active");
    logo.classList.toggle("active");
    if (btnBurger.classList.contains("active")) {
        console.log(window.scrollY);
        nav.style.height = window.innerHeight + "px";
        nav.style.width = window.innerWidth + "px";
        nav.style.top = window.scrollY + "px";
        body.style = "overflow:hidden";
    } else {
        body.style = "overflow:scroll";
    }
});
function btnBurgerOnScroll() {
    window.addEventListener("scroll", () => {
        if (window.scrollY < lastScroll) {
            btnBurger.style.top = "30px";
        } else {
            btnBurger.style.top = "-60px";
        }

        lastScroll = window.scrollY;
    });
}
if (window.scrollY > 60) {
    btnBurgerOnScroll();
}
