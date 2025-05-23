const ovlay = document.querySelector(".header .overlay");
const menu = document.querySelector(".header_box");
const closeBtn = document.querySelector(".header .times_btn");
const menuBtn = document.querySelector(".header .icon_menu");

// Mở menu
menuBtn.addEventListener("click", () => {
  menu.classList.add("is_show");
  ovlay.classList.add("is_show");
});

// Đóng menu
closeBtn.addEventListener("click", () => {
  menu.classList.remove("is_show");
  ovlay.classList.remove("is_show");
});

ovlay.addEventListener("click", () => {
  menu.classList.remove("is_show");
  ovlay.classList.remove("is_show");
});