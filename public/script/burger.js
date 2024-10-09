// script/burger.js
document.addEventListener("DOMContentLoaded", function () {
  const burgerIcon = document.getElementById("burgerIcon");
  const menu = document.getElementById("menu");

  if (!burgerIcon || !menu) {
    console.error("Burger icon or menu not found!");
    return;
  }

  burgerIcon.addEventListener("click", function () {
    menu.classList.toggle("open");
    console.log("Menu toggled");
  });

  menu.addEventListener("click", function () {
    menu.classList.remove("open");
    console.log("Menu closed");
  });
});
