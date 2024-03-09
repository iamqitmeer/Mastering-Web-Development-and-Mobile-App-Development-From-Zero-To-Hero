// Mutable aur Immutable dono terms programming mein data ke nature ko describe karne ke liye istemal hoti hain. Yeh dono concepts data ke changes ke tareeke ko describe karte hain:

// 1. **Mutable (Badlavshil)**:
//    - Mutable data wo hota hai jiska value badal sakti hai, matlab ki usmein changes kiya ja sakta hai.
//    - Jab ek mutable data type ka value change hota hai, toh uska original value modify ho jata hai.
//    - Example of mutable data types include arrays, objects, aur variables declared with `let` keyword in JavaScript.

// 2. **Immutable (Anivarya)**:
//    - Immutable data wo hota hai jiska value change nahi kiya ja sakta hai, matlab ki usmein koi bhi modifications nahi ki ja sakti.
//    - Jab ek immutable data type ka value change hota hai, toh ek naya value generate hota hai lekin original value change nahi hota.
//    - Examples of immutable data types include strings aur variables declared with `const` keyword in JavaScript.

// Example (JavaScript):
// ```javascript
// Mutable data type: Array
// let myArray = [1, 2, 3];
// myArray[0] = 10; // Original value modified
// console.log(myArray); // Output: [10, 2, 3]

// Immutable data type: String
// let myString = "Hello";
// myString[0] = "Y"; // Original value not modified
// console.log(myString); // Output: "Hello"
// ```

// Is example mein, `myArray` array ek mutable data type hai jiska value change kiya ja sakta hai, jabki `myString` string ek immutable data type hai jiska value change nahi kiya ja sakta hai.