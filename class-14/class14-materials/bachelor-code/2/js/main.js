const claire = document.querySelector("#claire");
const andi = document.querySelector("#andi");
const sharleen = document.querySelector("#sharleen");

document.querySelector("#andiNext").addEventListener("click", andiNext);
document.querySelector("#claireNext").addEventListener("click", claireNext);
document.querySelector("#sharleenNext").addEventListener("click", sharleenNext);

function andiNext() {
  claire.classList.add("hidden");
  sharleen.classList.add("hidden");
  andi.classList.toggle("hidden");
}

function claireNext() {
  claire.classList.toggle("hidden");
  sharleen.classList.add("hidden");
  andi.classList.add("hidden");
}

function sharleenNext() {
  claire.classList.add("hidden");
  sharleen.classList.toggle("hidden");
  andi.classList.add("hidden");
}
