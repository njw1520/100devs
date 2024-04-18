// *Variables*
// Create a variable and console log the value

let variable = "Test";
console.log(variable);

// Create a variable, add 10 to it, and alert the value

let addNum = 5;
console.log(addNum + 10);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subtractFour(a, b, c, d) {
  alert(a - b - c - d);
}

// Create a function that divides one number by another and returns the remainder

function modTwo(a, b) {
  return a % b;
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function sumCheck(a, b) {
  if (a + b > 50) {
    alert("Jumanji!");
  } else {
    return a + b;
  }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function divByThree(a, b, c) {
  let product = a * b * c;
  if (product % 3 === 0) {
    alert("ZEBRA");
  } else {
    return product;
  }
}
