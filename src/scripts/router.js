document.addEventListener("DOMContentLoaded", function () {
  const landing_page_menu_burger = document.getElementById("landing_page_menu_burger")
    ? document.getElementById("landing_page_menu_burger")
    : null;

  const menu_menu_burger = document.getElementById("menu_menu_burger")
    ? document.getElementById("menu_menu_burger")
    : null;

  if (landing_page_menu_burger) {
    landing_page_menu_burger.addEventListener("click",() => {
      document.location.href = "http://localhost:8080/menu"
    });
  }

  if (menu_menu_burger) {
    menu_menu_burger.addEventListener("click",() => {
      document.location.href = "http://localhost:8080/"
    });
  }
});
