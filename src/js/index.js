//toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//ketika Menu Di click
document.querySelector("#camping-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const camping = document.querySelector("#camping-menu");

document.addEventListener("click", function (e) {
  if (!camping.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
