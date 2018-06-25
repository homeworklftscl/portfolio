let hamBtn = document.querySelector("#app");
let fullMenu = document.querySelector(".full-menu");

hamBtn.addEventListener("click", function(e) {
  console.log("js");
  fullMenu.classList.toggle("full-menu_active");
});
