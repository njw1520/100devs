//Write your pseduo code first!

// Get celsius value via prompt

// Find formula to convert celsius to farenheit

// Implement function to take celsius as parameter

// return or display celsius value

document
  .querySelector("#submit")
  .addEventListener("click", celsius_to_farenheit);

function celsius_to_farenheit() {
  let celsius = document.querySelector("#temp").value;

  celsius = celsius * (9 / 5) + 32;

  document.querySelector("#result").innerText = `Result: ${celsius} F`;
}
