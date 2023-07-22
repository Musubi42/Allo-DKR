document.addEventListener("DOMContentLoaded", function () {
  const landing_page_menu_burger = document.getElementById("landing_page_menu_burger")
    ? document.getElementById("landing_page_menu_burger")
    : null;

  const menu_menu_burger = document.getElementById("menu_menu_burger")
    ? document.getElementById("menu_menu_burger")
    : null;

  if (landing_page_menu_burger) {
    landing_page_menu_burger.addEventListener("click",() => {
      document.location.href = document.location.host == "localhost:8080" ? "http://localhost:8080/menu" : "allo-dkr.musubi.dev/menu"
    });
  }

  if (menu_menu_burger) {
    menu_menu_burger.addEventListener("click",() => {
      document.location.href = document.location.host == "localhost:8080" ? "http://localhost:8080" : "allo-dkr.musubi.dev"
    });
  }
});
