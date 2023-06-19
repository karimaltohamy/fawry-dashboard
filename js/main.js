const headClick = document.querySelector(".nav_item .head");
const list = document.querySelector(".nav_item .list");

headClick.addEventListener("click", () => {
  list.classList.toggle("active");
});
