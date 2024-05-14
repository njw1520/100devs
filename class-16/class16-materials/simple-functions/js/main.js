//---Easy
//create a function that subtracts two numbers and alerts the difference

function subtractTwo(a, b) {
    alert(a - b)
}

// subtractTwo(50,30)

//create a function that divides three numbers and console logs the quotient

function divideThree(a,b,c) {
    console.log(a / b / c );
}

// divideThree(10,5,2)

//create a function that multiplys three numbers and returns the product

function multiplyThree(a,b,c) {
    return(a * b * c)
}

// multiplyThree(5,2,2)

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

function simpleMath(a, b, c) {
    return (a + b) % c;
}

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function hardMath(a,b,c,d) {
    let product = (a * b);
    if (product > 100) {
        product += c + d;
        console.log(product);
    } else if (product < 100) {
        product -= c - d;
        console.log(product);
    } else {
        console.log((a*b*c) % d);
    }
}

// hardMath(10,12,5,3)