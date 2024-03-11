var contactbtn = document.querySelector(".main-actions-button");

contactbtn.addEventListener("click",(e) => {
    e.preventDefault();

    alert("Contact Button clicked");
});


var myElement = document.querySelector(".body-store-items");

myElement.addEventListener("click", function() {
    e.preventDefault();
    alert("Good choice")
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));
  