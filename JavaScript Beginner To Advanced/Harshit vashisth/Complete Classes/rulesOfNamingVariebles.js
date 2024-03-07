// Variable ke naam rakhne ke kuch important rules hain:

// 1. Valid Characters: Variable ke naam mein sirf letters (both uppercase and lowercase), digits (0-9), underscores (_) aur dollar signs ($) allowed hote hain. Spaces, special characters, ya symbols ka istemal nahi kiya jata.

// 2. Must Begin with a Letter, Underscore, or Dollar Sign: Variable ke naam ko kisi bhi character se shuru kiya ja sakta hai lekin behtar hai ke naam ek letter, underscore ya dollar sign se shuru ho.

// 3. Case Sensitivity: JavaScript case sensitive hai, matlab ki uppercase aur lowercase letters ko alag alag characters ke roop mein consider karta hai. Jaise ki `name` aur `Name` do alag variables hain.

// 4. Keywords Nahi Hona Chahiye: Aap keywords ko variable names ke roop mein use nahi kar sakte hain. Keywords JavaScript ke reserved words hote hain jo special meanings ko define karte hain. Kuch examples hain: `let`, `var`, `const`, `if`, `else`, `function` etc.

// 5. Meaningful and Descriptive: Variable ke naam ko meaningful aur descriptive banayein taki dusre developers ko aasani se samajh aaye ki variable kis kaam ke liye hai. Jaise ki `userName`, `userAge` etc.

// 6. CamelCase Convention: Variable ke naam ko camelCase convention mein likha jata hai, matlab ki har naya word ko capitalize kiya jata hai bina spaces ke. Jaise ki `firstName`, `lastName`, `userAge` etc.

// In rules ka dhyan rakhkar aap variables ke sahi aur maintainable naam rakh sakte hain jo ki aapke code ko improve karte hain.

// var value1 = 10; // valid
// var 1value = 15; // inValid
// var $abc = "Raza"; // valid ( But Not Good Practice )
// var abc$ = "abc"; // valid ( But Not Good Practice )
// var Qitmeer = "hello"; // valid ( But Not Good Practice )
// var mynameis = "qitmeer"; // valid ( But Not Good Practice )
// var myName = "abc"; // valid ( Good Practice )
// var my_name = "abc"; // valid ( Good Practice )
// var my+name = "abc"; // invalid
// console.log(Qitmeer);  

// Valid Variables:

// userName
// userAge
// user_address
// _user
// $user
// user1
// UserAge
// firstName
// lastName
// fullName
// isUserLoggedIn
// user_email
// user_city
// userState
// userCountry
// userZipCode
// userPhoneNumber
// userBalance
// isAdmin
// isLoggedIn
// Invalid Variables:

// user name (contains space)
// 12user (starts with a digit)
// user@address (contains special character)
// let (keyword)
// const (keyword)
// function (keyword)
// for (keyword)
// while (keyword)
// return (keyword)
// var (keyword)
