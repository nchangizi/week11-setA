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

// const radiusPara = document.querySelector("#radius");
// console.log(radiusPara);
// const resultPara = document.querySelector("#result");
// console.log(resultPara);
// // Write a function that takes one parameter as radius of a circle and return the circles area.
// function circleAreaCalculation(radius) {
//   // check if radius is not a number and show an alert
//   if (isNaN(radius)) {
//     // alert("This is not a number");
//     resultPara.textContent = "This is not a number";
//     // update the textContent or innerText property of the resultPara
//   } else {
//     let area = Math.PI * radius * radius;
//     return area;
//   }
// }
// // Prompt user to enter a value.
// let userValue = prompt("Enter a number");
// // update the textContent or innerText property of the radiusPara
// radiusPara.textContent +=  userValue;
// // Call the area calculating function with the value entered by user.
// let result = circleAreaCalculation(userValue);
// // Show an alert message with both values e.g. “The area of a circle with radius 2 is 12.56”
// if (result !== undefined) {
//   // update the textContent or innerText property of the resultPara
//   resultPara.textContent = `The area of a circle with radius ${userValue} is ${result.toFixed(2)}`;
//   //   alert(`The area of a circle with radius ${userValue} is ${result}`);
// }
const ulList = document.querySelector(".shopping");
function populateList(shoppingListArray) {
  //for each item in the shoppingListArray, add a list item with its value to the ul
  for (let item of shoppingListArray) {
    // console.log(item)
    //1. make a new li
    const newLi = document.createElement("li");
    // 2. update the li's text using item
    newLi.textContent = item;
    //3. append li to the ul
    ulList.appendChild(newLi);
  }
}

let myShoppingList = ["cheese", "bread", "green pepper"];
populateList(myShoppingList);
