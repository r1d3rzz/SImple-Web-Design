const header = document.querySelector("header");
const toggleBtn = document.querySelectorAll("#menu_toggle");

toggleBtn.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    header.classList.toggle("showMenu");
  });
});
