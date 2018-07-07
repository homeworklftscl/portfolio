let hamBtn = document.querySelector("#app");
let fullMenu = document.querySelector(".full-menu");
let body = document.querySelector("body");

hamBtn.addEventListener("click", function(e) {
  console.log("js");
  body.classList.toggle("is-open");
  fullMenu.classList.toggle("full-menu_active");
});
