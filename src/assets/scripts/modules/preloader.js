const elPreloader = document.querySelector(".preloader");
const numPreloader = elPreloader.querySelector(".text-svg");
const images = document.images;
const imagesCount = images.length;
const percent = 100 / imagesCount;
let counter = 0;

for (let i = 0; i < imagesCount; i++) {
  const img = images[i];
  const imgCopy = new Image();
  imgCopy.src = img.src;
  imgCopy.onload = imgLoad;
  imgCopy.onerror = imgLoad;
}

function imgLoad() {
  counter++;
  numPreloader.innerHTML = ~~(percent * counter);
}

window.addEventListener("load", setStyle);

function setStyle() {
  const stylePreloader = elPreloader.style;
  setTimeout(() => {
    stylePreloader.opacity = 0;
  }, 2500);

  setTimeout(() => {
    stylePreloader.display = "none";
  }, 3000);
}
