// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// ===

console.log("2" === 2);

// Data type comparison JavaScript mein bahut ahem hai. Jab aap do variables ya values ke beech mein comparison karte hain, toh JavaScript unke data types ko bhi consider karta hai. Yeh kuch alag tarah se kaam karta hai:

// Strict Equality (===):

// Strict equality operator (===) do values ya variables ke data type aur value dono ko compare karta hai.
// Agar dono ka data type aur value ek jaisa hai, toh result true hota hai.
// Agar data type ya value dono ek nahi hai, toh result false hota hai.

// console.log(5 === 5); // Output: true
// console.log(5 === '5'); // Output: false (Number vs. String)
// Loose Equality (==):

// Loose equality operator (==) sirf values ko compare karta hai, aur agar dono values ke data types alag hain, toh type coercion hota hai.
// Type coercion mein JavaScript ek value ko doosre ke data type mein convert kar deta hai.
// Fir comparison hota hai.

// console.log(5 == 5); // Output: true
// console.log(5 == '5'); // Output: true (Number ko String mein convert karke compare kiya)
// Type Conversion:

// Agar comparison mein ek operand string aur doosra number hai, toh JavaScript string ko number mein convert kar deta hai.
// Agar comparison mein ek operand boolean aur doosra non-boolean hai, toh JavaScript non-boolean ko boolean mein convert kar deta hai.

// console.log(5 == '5'); // Output: true (Number ko String mein convert karke compare kiya)
// console.log(true == 1); // Output: true (Boolean ko Number mein convert kiya, true = 1)
// Data Type Comparison Order:

// Strict equality (===) pehle data type ko check karta hai, phir value ko.
// Loose equality (==) pehle value ko check karta hai, phir data type ko (agar value same hai).
// Object Comparison:

// Object comparison mein reference compare hota hai.
// Agar do objects same memory reference share karte hain, toh woh equal hote hain, varna nahi.

// var obj1 = {};
// var obj2 = {};
// console.log(obj1 === obj2); // Output: false (Different memory references)

// Yeh examples JavaScript ke data type comparison ke kuch interesting cases demonstrate karte hain. Chaliye ek-ek karke samjhte hain:

// 1. Number Comparison:
//    console.log(2 > 1);   // Output: true
//    console.log(2 >= 1);  // Output: true
//    console.log(2 < 1);   // Output: false
//    console.log(2 == 1);  // Output: false
//    console.log(2 != 1);  // Output: true
//    ```
//    Yahan sabhi comparisons numeric values par based hain, aur expected results dete hain.

// 2. String Comparison:
//    console.log("2" > 1);    // Output: true (String ko number mein convert karke compare kiya)
//    console.log("02" > 1);   // Output: false (String ko number mein convert karke compare kiya)
//    ```
//    Yahan, strings `"2"` aur `"02"` ko numbers mein convert karke comparison kiya jata hai. `"2"` ko number mein convert karne par 2 aata hai jo 1 se bada hai, lekin `"02"` ko number mein convert karne par bhi 2 hi aata hai jo 1 se chhota hai.

// 3. Null aur Undefined Comparison:
//    console.log(null > 0);    // Output: false
//    console.log(null == 0);   // Output: false
//    console.log(null >= 0);   // Output: true
//    console.log(undefined == 0);  // Output: false
//    console.log(undefined > 0);   // Output: false
//    console.log(undefined < 0);   // Output: false
//    ```
//    - Null ke saath koi bhi comparison karte waqt result `false` hota hai, except `null >= 0` jahan null ko number mein convert kiya jata hai jo 0 se bada nahi hota.
//    - Undefined ke saath koi bhi comparison karne par result `false` hota hai.

// 4. Strict Equality (===):
//    console.log("2" === 2);   // Output: false (Data type bhi compare kiya jata hai)
//    ```
//    Yahan, strict equality operator (`===`) ne data type bhi compare kiya hai, aur string `"2"` aur number `2` ke data types alag hote hain, isliye result `false` hai.

// Is tarah se, JavaScript mein comparisons ke bahut se interesting rules hote hain, jo data types aur values ke accordance mein kaam karte hain.