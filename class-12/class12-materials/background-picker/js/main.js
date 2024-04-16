document.getElementById("purple").onclick = partyPurple;
document.getElementById("green").onclick = partyGreen;
document.getElementById("blue").onclick = partyBlue;
document.getElementById("orange").onclick = partyOrange;
document.getElementById("yellow").onclick = partyYellow;

function partyPurple() {
  document.querySelector("body").style.backgroundColor = "rgba(241, 63, 247, 1)";
  document.querySelector("body").style.color = "rgba(255, 255, 255, 1);"
};

function partyGreen() {
  document.querySelector("body").style.backgroundColor = "rgba(0, 253, 81, 1)";
  document.querySelector("body").style.color = "rgba(255, 255, 255, 1)";
};

function partyBlue() {
  document.querySelector("body").style.backgroundColor = "rgba(0, 254, 255, 1)";
  document.querySelector("body").style.color = "rgba(255, 255, 255, 1)";
};

function partyOrange() {
  document.querySelector("body").style.backgroundColor = "rgba(255, 165, 0, 1)";
  document.querySelector("body").style.color = "rgba(255, 255, 255, 1)";
};

function partyYellow() {
  document.querySelector("body").style.backgroundColor = "rgba(255, 255, 0, 1)";
  document.querySelector("body").style.color = "rgba(255, 255, 255, 1)";
};
