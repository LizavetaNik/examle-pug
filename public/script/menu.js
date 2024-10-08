document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".list-item");

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      menuItems.forEach((i) => {
        i.classList.remove("active");
        i.dataset.active = false;
      });

      item.classList.add("active");
      item.dataset.active = true;
    });
  });
});
