// Single - Topic

// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------

// word vs keyword
// word - aisi cheez ka jis ka matlab js me na ho called word
// keyword - aisi cheez jis ka matlab js me hoo called keyword

// what is variebles
// varieble is container jis me ham data ko store kr skte he.

// varieble creation
// myName = "Qitmeer Raza"; // ye varieble he lekin aise varieble banana ghalat he. ye bilkul bhi achi practice nhi he.

// var vs let vs const

// var -- function scope rakhta hai aur use dubara declare aur reassign kiya ja sakta hai.
// var myName = "Qitmeer Raza";

// let -- block scope rakhta hai aur use reassign kiya ja sakta hai lekin dubara declare nahi kiya ja sakta.
// let myName = "Qitmeer Raza";

// const -- block scope rakhta hai aur initialization ke baad reassign ya dubara declare nahi kiya ja sakta.
// const myName = "Qitmeer Raza";

// hoisting
// Hoisting mein, JavaScript engine variable aur function declarations ko code ke shuru mein le jaata hai, matlab ki unhe upar laata hai, lekin actual assignment ya initialization ko nahi.

// types in js
// primitive or Reference
// primitive | without bracket
// Reference | with bracket

// 1. Primitive data types (jaise ki numbers, strings, booleans) direct value ko store karte hain, reference data types (jaise ki objects, arrays) values ko reference karte hain.
// 2. Primitive values immutable hote hain, reference values mutable hote hain, yani ki primitive values ko change nahi kiya ja sakta lekin reference values ko change kiya ja sakta hai.
// 3. Primitive values ko direct comparison mein compare kiya ja sakta hai, reference values ko sirf reference comparison kiya ja sakta hai.

// if else
// agar jaha pe bhi

// Print 25 to 50

// for (let i = 25; i <= 50; i++) {
//   console.log(i);
// }

// var i = 0;
// while (i < 10) {
//   i++;
//   console.log(i);
// }

// var i = 25;
// while (i < 50) {
//   ++i;
//   console.log(i);
// }

function abc() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log("Inside --> ", i);
}

abc();
