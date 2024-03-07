// Strings ka indexing ek important concept hai jo aapko string ke har character ko access karne mein madad karta hai. JavaScript mein strings ko 0-based indexing system ke saath index kiya jata hai, matlab ki pehla character ka index 0 hota hai, dusra character ka index 1, aur isi tarah se chalta hai.

// Yeh ek chhota example hai jismein main string indexing ke baare mein smjha raha hoon:

// ```javascript
// let str = "Hello World";

// // Pehla character ko access karna
// console.log(str[0]); // Output: "H"

// // Doosra character ko access karna
// console.log(str[1]); // Output: "e"

// // String ki length nikalna
// console.log(str.length); // Output: 11

// // Aakhri character ko access karna
// console.log(str[str.length - 1]); // Output: "d"
// ```

// Is example mein:

// - `str[0]` se hum pehle character ko access kar rahe hain, jo ki "H" hai.
// - `str[1]` se hum doosre character ko access kar rahe hain, jo ki "e" hai.
// - `str.length` se hum string ki length nikal rahe hain, jo ki 11 hai.
// - `str[str.length - 1]` se hum aakhri character ko access kar rahe hain, jiska index `str.length - 1` hota hai.

// Is tarah se indexing ka istemal karke aap kisi bhi character ko string mein access kar sakte hain. Yaad rakhein ki JavaScript mein string ke characters ko modify nahi kiya ja sakta hai, kyunki strings immutable hoti hain.