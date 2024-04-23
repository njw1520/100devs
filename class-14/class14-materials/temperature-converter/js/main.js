//Write your pseduo code first!
// Get temp (C)
//
document.querySelector("#temp").addEventListener("click", run);

function run() {
  let temp = document.querySelector("#temp").value;

  // Convert Temp to C

  temp = (temp * 9) / 5 + 32;

  // Display converted Temp]

  document.querySelector("f_temp").innerText = temp;
}
