const menuToggle = document.querySelector("#menuToggle");
const menu = document.querySelector("#menu");

document.addEventListener("click", () => {
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
    } else {
        menu.classList.add("hidden");
    }
});
