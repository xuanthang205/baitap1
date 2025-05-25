const menuBtn = document.querySelector(".header .menu_btn");
const closeBtn = document.querySelector(".header .times_btn");
const overlay = document.querySelector(".header .overlay");
const headerBox = document.querySelector(".header_box");

menuBtn.addEventListener("click", () => {
    overlay.classList.add("is_show");
    headerBox.classList.add("is_show");

    setTimeout(() => {
        headerBox.style.transition = "transform 0.25s ease-in-out";
        headerBox.classList.add("is_move");
    }, 10);
});

function closeMenu() {
    headerBox.classList.remove("is_move");
    setTimeout(() => {
        headerBox.classList.remove("is_show");
        overlay.classList.remove("is_show");
        headerBox.style.removeProperty("transition");
    }, 250);
}

closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);
