// to get current year
function getYear() {
    document.querySelector("#displayYear").innerHTML = new Date().getFullYear().toString();
}

getYear();

// nav menu
function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document
        .querySelector(".custom_menu-btn")
        .classList.toggle("menu_btn-style");
}