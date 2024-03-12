// ---------------------- Datatype ---------------------- \\

// There Are two Type of Datatypes
// 1. Primitive
// 2. Non-Primitive

// Primitive:

// --- Primitive Data Types: Inme primitive values store hoti hain, jo directly variable ke memory space mein store hoti hain.
// --- Immutable: Primitive values immutable hote hain, matlab unki value ek baar set hone ke baad badal nahi sakti.
// --- Pass by Value: Jab primitive values ko functions mein pass kiya jata hai, toh woh value ke saath hi pass hoti hai.
// --- Direct Access: Primitive values ko variable ke through directly access kiya ja sakta hai.

// Data Types:

// Number: Integer, floating-point numbers, aur special numeric values (NaN, Infinity, -Infinity).

// let num = Number(123);
let num = 123;
// console.log(num);

// String: Ek sequence of characters.

let str = String("Qitmeer");
// let str = 'Qitmmeer';
// console.log(str);

// Boolean: Logical values true ya false.

// let bool = true;
// let bool = Boolean(false);
// console.log(bool);

// Null: Intentional absence of any object value.

// let nulla = null;
// console.log(nulla);

// Undefined: Variable declared hai lekin usmein koi value assign nahi ki gayi hai.

// let undef = undefined;
// console.log(undef);

// Symbol: Unique identifiers, introduced in ECMAScript 6 (ES6).

let nulla = null;
console.log(nulla);

// Non-Primitive
// -- Ye complex data types hote hain aur reference values ko store karte hain.
// -- Ye mutable (changeable) hote hain.

// Non-primitive data types include:

// Object: Key-value pairs ke collection ko represent karne ke liye. Jaise { name: "John", age: 30 }
// Array: Ordered collection of values ko store karne ke liye, jaise [1, 2, 3, 4, 5]
// Function: Code block ko reusability ke liye define karne ke liye.
// Date: Date aur time ko represent karne ke liye.
// Any other object, jaise Map, Set, Error, etc.

// ---------------------- Datatype Conversion ---------------------- \\

// String se Number:
// String ko number mein convert karne ke liye parseInt() ya parseFloat() ka istemal kiya ja sakta hai.
// -- var str = "123";
// -- var num = parseInt(str);
// -- console.log(num); // Output: 123

// -- Number se String:
// Number ko string mein convert karne ke liye toString() ka istemal kiya ja sakta hai.
// var num = 123;
// var str = num.toString();
// console.log(str); // Output: "123"

// Boolean se String:
// Boolean ko string mein convert karne ke liye toString() ka istemal kiya ja sakta hai.
// -- var bool = true;
// -- var str = bool.toString();
// -- console.log(str); // Output: "true"

// -- Number se Boolean:
// Number ko Boolean mein convert karne ke liye Boolean() ka istemal kiya ja sakta hai. 0 ke alawa sabhi numbers true ko convert karte hain.
// -- var num = 0;
// -- var bool = Boolean(num);
// -- console.log(bool); // Output: false
// -- Aise tarikon se, aap JavaScript mein alag alag data types ko ek dusre mein convert kar sakte hain, lekin dhyan rakhein ki kuch cases mein conversion expected behavior se alag ho sakta hai.

// ---------------------- Some Return Keywords ---------------------- \\

// NaN (Not a Number), undefined, aur null JavaScript mein commonly use hone wale terms hain jo ki data type aur variable states ko represent karte hain. Yeh terms kuch farq rakhte hain:


// NaN (Not a Number):
// NaN ek special numeric value hai jo kisi expression ka result undefined ya invalid hone par aata hai.
// Iska matlab hai ki jo operation aap kar rahe hain woh numeric value ke liye sahi nahi hai.
// -- var result = "Hello" / 5;
// -- console.log(result); // Output: NaN

// undefined:
// undefined ek pre-defined global variable hai jo indicate karta hai ki ek variable declare kiya gaya hai lekin uska value assign nahi kiya gaya hai.
// -- var x;
// -- console.log(x); // Output: undefined

// null:
// null ek special keyword hai jo indicate karta hai ki koi value available nahi hai.
// Developers explicitly null assign karte hain variables ko clear karte hue.
// -- var y = null;
// -- console.log(y); // Output: null

// ---------------------- String se Number ---------------------- \\

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);