// Yeh sabhi methods JavaScript mein strings ke saath istemal kiye jate hain. Niche diye gaye hai unki tafseel:

// 1. trim():
//    - `trim()` method ek string ke shuruwat aur aakhir mein se extra spaces ko hata deta hai.
//    - Yeh method ek naya string return karta hai jismein extra spaces nahi hote.
//    ```javascript
//    let str = "  Hello World  ";
//    let trimmedStr = str.trim();
//    console.log(trimmedStr); // Output: "Hello World"
//    ```

// 2. toUpperCase():
//    - `toUpperCase()` method ek string ke sare characters ko uppercase mein convert karta hai.
//    - Yeh method ek naya string return karta hai jismein sare characters uppercase mein hote hain.
//    ```javascript
//    let str = "hello";
//    let upperCaseStr = str.toUpperCase();
//    console.log(upperCaseStr); // Output: "HELLO"
//    ```

// 3. toLowerCase():
//    - `toLowerCase()` method ek string ke sare characters ko lowercase mein convert karta hai.
//    - Yeh method ek naya string return karta hai jismein sare characters lowercase mein hote hain.
//    ```javascript
//    let str = "WORLD";
//    let lowerCaseStr = str.toLowerCase();
//    console.log(lowerCaseStr); // Output: "world"
//    ```

// 4. slice():
//    - `slice()` method ek string ka ek part return karta hai, specified indices ke beech mein.
//    - Ismein do parameters hote hain, start index aur end index, lekin end index ka character include nahi hota.
//    ```javascript
//    let str = "Hello World";
//    let slicedStr = str.slice(6, 11);
//    console.log(slicedStr); // Output: "World"
//    ```

// In methods ka istemal karke aap strings ke sath alag-alag operations perform kar sakte hain aur unhe manipulate kar sakte hain.
