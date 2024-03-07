// `let` aur `var` dono keywords JavaScript mein variables banane ke liye istemal hote hain, lekin unmein kuch farq hai jo aapko samajh lena chahiye:

// 1. `var` Keyword:
//    - `var` keyword se banaye gaye variables function-scoped hote hain, yani unka scope us function tak limited hota hai jismein woh declare kiye gaye hain.
//    - Agar aap `var` keyword ke bina variable declare karte hain to woh automatically global scope mein ban jata hai, jiske wajah se unexpected behavior ho sakta hai.
//    - `var` ko hoisting mein participate karta hai, matlab function ke scope ke shuruwat mein declare kiye gaye `var` variables ko upar le jata hai.

// 2. `let` Keyword:
//    - `let` keyword se banaye gaye variables block-scoped hote hain, yani unka scope us block tak limited hota hai jismein woh declare kiye gaye hain.
//    - `let` keyword ko hoisting mein participate nahi karta hai. Yani, `let` se declare ki gayi variables ko unke declaration se pehle access nahi kiya ja sakta.
//    - `let` keyword ko modern JavaScript mein recommend kiya jata hai kyunki isse code ka behavior predictable hota hai aur scope kaafi clearly define hota hai.

// Jab aap modern JavaScript ka istemal kar rahe hain, behtar hai ki aap `let` keyword ka istemal karein variables declare karne ke liye. Isse aapko function-scoped variables ki jagah block-scoped variables milte hain aur aapko hoisting se related issues se bachne mein madad milti hai.

// example

// let myName = "Qitmeer";

// {
//   let myName = "Raza";
//   console.log(myName + "inner");
// }

// console.log(myName + "outer");
