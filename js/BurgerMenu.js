const menu = document.querySelector(".header__menu");
const openMenuBtn = document.querySelector(".header__burger");

openMenuBtn.addEventListener("click", openMenu);

function openMenu() {
    menu.classList.toggle("active");
    openMenuBtn.classList.toggle("active");
}

window.addEventListener("scroll", onScroll);

function onScroll(e) {
    const positionBtn = openMenuBtn.getBoundingClientRect();
    if (
        document.documentElement.scrollTop > 0 &&
        document.documentElement.scrollTop < 20
    ) {
        openMenuBtn.style.left = positionBtn.right - 26 + "px";
        openMenuBtn.classList.add("fixed");
    } else if (document.documentElement.scrollTop == 0) {
        openMenuBtn.classList.remove("fixed");
        openMenuBtn.style.left = "";
    }
}
