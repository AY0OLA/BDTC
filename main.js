// NAV ICON
let ICON = document.querySelector("#icon")
let ul = document.querySelector("ul")

ICON.addEventListener("click",() =>{
    ICON.classList.toggle("active");
    ul.classList.toggle("show");
});