// function greet(name, time = "day") {
//   console.log(`Good ${time} ${name}`);
// }

// greet("Neda", "night", "sandwich");

// let greet = function(name) {
//   console.log(`Hello ${name}`);
// }

// greet("Neda");
// greet("John")
// let greet = (name) => {
//   console.log(`Hello ${name}`);
// };

// greet("Neda");

// Write a function that takes one parameter as radius of a circle and return the circles area.
function circleAreaCalculation(radius) {
  // check if radius is not a number and show an alert
  if (isNaN(radius)) {
    alert("This is not a string");
  } else {
    let area = Math.PI * radius * radius;
    return area;
  }
}
// Prompt user to enter a value.
let userValue = prompt("Enter a number");
// Call the area calculating function with the value entered by user.
let result = circleAreaCalculation(userValue);
// Show an alert message with both values e.g. “The area of a circle with radius 2 is 12.56”
alert(`The area of a circle with radius ${userValue} is ${result.toFixed(2)}`);
