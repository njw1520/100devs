//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector("#check").addEventListener("click", check);

function check() {
  const day = document.querySelector("#day").value.toLowerCase();

  if (day === "tuesday" || day === "thursday") {
    document.querySelector("#placeToSee").innerHTML = "YOU HAVE CLASS";
  } else if (day === "saturday" || day === "sunday") {
    document.querySelector("#placeToSee").innterHTML = "Its The Weekend";
  } else if (day === "wednesday") {
    ("Humpday!");
  } else {
    console.log("BORING");
  }
}
