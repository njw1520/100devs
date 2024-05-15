// *Variables*
// Create a variable and console log the value
let a = 5;
console.log(a);
// Create a variable, add 10 to it, and alert the value

let b = 5;
alert(b + 10);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subtractFour(a,b,c,d) {
    alert(a - b - c - d);
}

subtractFour(100,20,10,5)

// Create a function that divides one number by another and returns the remainder

function divideTwo(a,b) {
    return a % b;
}

divideTwo(10,5)

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function sumFifty(a,b) {
    let sum = a + b;
    if (sum > 50) {
        alert("Jumanji");
    }
}

sumFifty(50,20)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiplyThree(a,b,c) {
    let product = a * b * c;
    if (product % 3 == 0) {
        alert("ZEBRA");
    }
}

multiplyThree(10,3,1)

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function loopTest(word,number) {
    for (let i = 1; i <= number; i++) {
        console.log(word);
    }
}


loopTest("Jack",10)