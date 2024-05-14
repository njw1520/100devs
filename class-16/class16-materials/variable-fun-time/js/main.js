//--- Easy
//create a variable and assign it a number
let number = 50;
//minus 10 from that number
number -= 10;
//print that number to the console
console.log(number);
//--- Medium
//create a variable that holds a value from the input
let inputValue = document.querySelector("#dancedanceRevolution");
//add 25 to that number
inputValue += 25;
//alert that number
alert(inputValue);
//--- Hard
//create a variable that holds the h1
const h1Value = document.querySelector("h1");
//add an event listener to that element that console logs the sum of the two previous variables
document.addEventListener("click", sum);

function sum() {
  console.log(inputValue + number);
}
