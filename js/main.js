const headClick = document.querySelectorAll(".nav_item .head");
const lists = document.querySelectorAll(".nav_item .list");

headClick.forEach((ele) => {
  ele.addEventListener("click", () => {
    const num = ele.getAttribute("data-num");

    document.querySelector(`.list${num}`).classList.toggle("active");
  });
});
