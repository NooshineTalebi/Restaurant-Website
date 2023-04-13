window.addEventListener("load", function () {
  AOS.init();
});

const toggle = document.getElementById("toggle");
const sidebar = document.getElementById("sidebar");

document.onclick = function (e) {
  if (e.target.id !== "sidebar" && e.target.id !== "toggle") {
    toggle.classList.remove("active");
    sidebar.classList.remove("active");
  }
};

toggle.onclick = function () {
  toggle.classList.toggle("active");
  sidebar.classList.toggle("active");
};

const menuTeam = document.querySelector(".team-item");
const teamSection = document.querySelector(".team");
menuTeam.addEventListener("click", () => {
  teamSection.scrollIntoView();
});

const [...menuItems] = document.querySelectorAll(".menu-item");

const menuFilter = (foodType) => {
  document
    .querySelector(`.${foodType}-section`)
    .addEventListener("click", () => {
      menuItems.forEach((menu) => {
        menu.classList.remove("active");
        if (menu.classList.contains(`menu-${foodType}`)) {
          menu.classList.add("active");
        } else {
          menu.classList.add("hidden");
        }
      });
    });
};

menuFilter("lunch");
menuFilter("dinner");
menuFilter("dessert");
menuFilter("drink");
