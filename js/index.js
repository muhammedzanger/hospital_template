let menu = document.getElementById("menu-btn");
let navBar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navBar.classList.toggle("active");
};
window.onscroll = () => {
    menu.classList.remove("fa-times");
    navBar.classList.remove("active");
}
