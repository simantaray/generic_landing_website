const toggleLogo = document.getElementById("mobile-menu");

const menuList = document.querySelector(".navbar__menu");

const displayNav = () => {
  console.log("clicked");
  toggleLogo.classList.toggle("active");
  menuList.classList.toggle("active");
};

toggleLogo.addEventListener("click", displayNav);
//nav bar controll