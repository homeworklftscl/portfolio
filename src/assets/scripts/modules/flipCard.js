let btnAut = document.querySelector(".btn-authorization");
let btnHome = document.querySelector(".btn__home");
let cardFace = document.querySelector(".card__face");
let cardAut = document.querySelector(".card__autoriz");

btnAut.addEventListener("click", function() {
  cardFace.classList.add("card__face_active");
  cardAut.classList.add("card__autoriz_active");
  btnAut.classList.add("hidden");
});

btnHome.addEventListener("click", function() {
  cardFace.classList.remove("card__face_active");
  cardAut.classList.remove("card__autoriz_active");
  btnAut.classList.remove("hidden");
});
