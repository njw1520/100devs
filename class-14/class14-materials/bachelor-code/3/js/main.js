const contestants = document.querySelectorAll("contestant");

Array.from(contestants).forEach((element) =>
  element.addEventListener("click", checkForRose),
);

function checkForRose(click) {
  if (click.target.classList.contains("rose")) {
    document.querySelector("#nikki").classList.toggle("hidden");
    // document.querySelector(".body").style.background = rgba(255, 255, 0);
  } else {
    alert("Wrong!");
  }
}
