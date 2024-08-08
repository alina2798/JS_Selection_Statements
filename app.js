console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);
// Exercie 1

let magicNumber = 3;

let guessNumber = prompt("What is the magic number?");

if (guessNumber ==magicNumber) {
  console.log("Congratulations!!!");
} else if (guessNumber > magicNumber) {
console.log("Guess was too high :/. Try again");
} else if (guessNumber < magicNumber) {
  console.log("Guess was too low >:(. Try again.");
}

// Exercie 2
let birthMonth = prompt ("Please insert your birth month");
switch (birthMonth) {
  case "December":
  case "January":
  case "February":
  console.log("Winter");
  break;
  case "March":
  case "April":
  case "May":
  console.log("Spring");
  break;
  case "June":
  case "July":
  case "August":
  console.log("Summer");
  break;
  case "September":
  case "October":
  case "November":
  console.log("Fall");
  break;
default:
  console.log("I don't recognize that month...");
}

//Exercice 3
let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case "01":
    type = "Tank top";
    break;
  case "02":
    type = "T-shirt";
    break;
  case "03":
    type = "Long Sleeve";
    break;
  case "04":
    type = "Sweat Shirt";
    break;
  default:
    type = "other";
}


switch (colorId) {
  case "BL":
    color = "Black";
    break;
  case "BL":
    color = "Blue";
    break;
  case "RD":
    color = "Red";
    break;
  case "PU":
    color = "Purple";
    break;
  default:
    color = "White";
}

switch (sizeId) {
  case "S":
    size = "Small";
    break;
  case "M":
    size = "Medium";
    break;
  case "L":
    size = "Large";
    break;
  case "XL":
    size = "Extra Large";
    break;
  default:
    size = "One Size Fits All";
}

console.log(`Product: ${size} ${color} ${type}`);