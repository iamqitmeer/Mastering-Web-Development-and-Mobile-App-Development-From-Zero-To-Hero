// `var`, `let`, aur `const` teeno JavaScript mein variables declare karne ke liye istemal hote hain, lekin unmein kuch farq hai:

// 1. `var`:
//    - `var` keyword se banaye gaye variables function-scoped hote hain, matlab unka scope us function tak limited hota hai jismein woh declare kiye gaye hain.
//    - `var` ko hoisting mein participate karta hai, matlab function ke scope ke shuruwat mein declare kiye gaye `var` variables ko upar le jata hai.
//    - `var` se declare kiye gaye variables ki value ko redefine kar sakte hain aur unki value ko update kar sakte hain.

// 2. `let`:
//    - `let` keyword se banaye gaye variables block-scoped hote hain, yani unka scope us block tak limited hota hai jismein woh declare kiye gaye hain.
//    - `let` ko hoisting mein participate nahi karta hai. Yani, `let` se declare ki gayi variables ko unke declaration se pehle access nahi kiya ja sakta.
//    - `let` se declare ki gayi variables ki value ko redefine kar sakte hain, lekin unki value ko update kar sakte hain.

// 3. `const`:
//    - `const` keyword se banaye gaye variables bhi block-scoped hote hain, aur unka scope us block tak limited hota hai jismein woh declare kiye gaye hain.
//    - `const` se declare ki gayi variables ki value ek baar assign hone ke baad change nahi ho sakti. Yani, const variables ki value immutable hoti hai.
//    - `const` variables ko hoisting mein participate nahi karta hai. Yani, `const` se declare ki gayi variables ko unke declaration se pehle access nahi kiya ja sakta.

// In teeno keywords ke istemal ka tareeqa unke characteristics aur aapki code ki requirement ke mutabiq hota hai. Agar aapko ek variable ko redefine ya update karna hai, toh `var` aur `let` ka istemal kiya ja sakta hai. Lekin agar aapko ek variable ko ek baar assign karke uski value ko change nahi karna hai, toh `const` ka istemal kiya ja sakta hai.

// Example

const myName = "Qitmeer";
myName = "Raza"; // Error - Assignment to constant variable.
console.log(myName);
