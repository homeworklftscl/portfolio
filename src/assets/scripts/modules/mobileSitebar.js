let triggerBtn = document.querySelector(".trigger");
let blogNav = document.querySelector(".blog-nav");

triggerBtn.addEventListener("click", function(e) {
  console.log("js");
  blogNav.classList.toggle("blog-nav_active");
});
