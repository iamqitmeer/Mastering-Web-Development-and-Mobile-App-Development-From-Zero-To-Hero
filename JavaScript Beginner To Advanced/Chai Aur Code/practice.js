let myFirstName = "Qitmeer";
let myLastName = "Raza";
let myAge = 15;
let myFatherName = "Muhammad Iqbal";

// Template Literals
// let result = `My Name is ${myFirstName} ${myLastName} & My Father Name is ${myFatherName}. i am ${myAge} Y/OLD`;
// console.log(result);

let guessNumber = prompt("Guess The Number.");

if (guessNumber == 91) {
  console.log("Your Guess Number is Correct");
} else if (guessNumber > 91) {
  console.log("Your Guess Number is Bigger Than Real Number");
} else if (guessNumber < 91) {
  console.log("Your Guess Number is Lower Than Real Number");
}