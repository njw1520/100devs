// Task 1
// Replace Function Expressions with arrow functions in the code below:

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no;
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution."),
);

// FizzBuzz

for (i = 1; i <= 100; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log("FizzBuzz");
  } else if (i % 5 === 0) {
    console.log("Fizz");
  } else if (i % 3 === 0) {
    console.log("Buzz");
  } else {
    console.log(`Number: ${i}`);
  }
}
