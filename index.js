// 1. Updater
// Create a new variable and call it determiner
// Give determiner a random value between -100 and 100 (change it to experiment)
// Create a 2nd variable called x
// Depending on the value of determiner, assign a value to x.
// If determiner is less than 0, x's value should be "Less than 0"
// If determiner is greater or equal 0, x's value should "Greater or equal to 0".

const determiner = 10;
const x = determiner >= 0 ? "Greater or equal to 0" : "Less than 0";

console.log(x);

console.log(
  "-----------------------------------------------------------------------------------------------"
);

// 2.Create a new variable called updater

// Depending on the value of determiner

// If determiner is greater or equal to 0
// set updater to "Greater or equal to 0"
// create another variable called message
// assign a value of "Positive Integer" to message
// print out message with this format "message: [value of message]".
// If determiner is less than 0, assign updater' the value "Less than 0".
// Print out the value of updater with this format "updater: [value of updater]".

let updater;
if (determiner >= 0) {
  updater >= 0;
  const message = "Positive Integer";
  console.log("message:", message);
} else {
  console.log("updater less than 0");
}

console.log(
  "-----------------------------------------------------------------------------------------------"
);

// 3
// Generally, we use a ternary operator when we want to set a value to a variable based on a condition.
// Example
const y = x == 42 ? true : false;
