// Strings ko manipulate karne ke liye JavaScript mein kai tarah ke methods hain. Yahan kuch mukhya aur commonly used string methods hain jo aksar istemal kiye jaate hain:

// 1. `length`:
//    - `length` property string ka length return karta hai, yaani usmein kitne characters hain.
//    ```javascript
//    var str = "Hello";
//    console.log(str.length); // Output: 5
//    ```

// 2. `charAt(index)`:
//    - `charAt()` method specified index par character return karta hai.
//    ```javascript
//    var str = "Hello";
//    console.log(str.charAt(0)); // Output: H
//    console.log(str.charAt(3)); // Output: l
//    ```

// 3. `concat(str1, str2, ...)`:
//    - `concat()` method ek ya zyada strings ko ek sath concatenate karke naya string return karta hai.
//    ```javascript
//    var str1 = "Hello";
//    var str2 = "World";
//    console.log(str1.concat(' ', str2)); // Output: Hello World
//    ```

// 4. `toUpperCase()`:
//    - `toUpperCase()` method string ke har character ko uppercase mein convert karta hai.
//    ```javascript
//    var str = "hello";
//    console.log(str.toUpperCase()); // Output: HELLO
//    ```

// 5. `toLowerCase()`:
//    - `toLowerCase()` method string ke har character ko lowercase mein convert karta hai.
//    ```javascript
//    var str = "HELLO";
//    console.log(str.toLowerCase()); // Output: hello
//    ```

// 6. `indexOf(substring, start)`:
//    - `indexOf()` method substring ka index return karta hai, yaani substring string mein kahan se shuru hota hai.
//    ```javascript
//    var str = "Hello World";
//    console.log(str.indexOf('World')); // Output: 6
//    ```

// 7. `substring(startIndex, endIndex)`:
//    - `substring()` method specified indices ke beech ke substring ko return karta hai.
//    ```javascript
//    var str = "Hello World";
//    console.log(str.substring(6)); // Output: World
//    console.log(str.substring(0, 5)); // Output: Hello
//    ```

// 8. `slice(startIndex, endIndex)`:
//    - `slice()` method specified indices ke beech ke characters ko ek naye string mein copy karta hai.
//    ```javascript
//    var str = "Hello World";
//    console.log(str.slice(6)); // Output: World
//    console.log(str.slice(0, 5)); // Output: Hello
//    ```

// 9. `replace(searchValue, replaceValue)`:
//    - `replace()` method specified value ko dusre value se replace karta hai.
//    ```javascript
//    var str = "Hello World";
//    console.log(str.replace('World', 'JavaScript')); // Output: Hello JavaScript
//    ```

// 10. `split(separator)`:
//     - `split()` method string ko specified separator ke basis par array mein split karta hai.
//     ```javascript
//     var str = "Hello World";
//     console.log(str.split(' ')); // Output: ["Hello", "World"]
//     ```

// 11. `trim()`:
//     - `trim()` method string ke shuru aur ant mein se extra spaces ko remove karta hai.
//     ```javascript
//     var str = "   Hello World   ";
//     console.log(str.trim()); // Output: Hello World
//     ```

// Yeh sirf kuch examples hain, JavaScript mein aur bhi kai string methods hain jo strings ko manipulate karne mein madad karte hain. In methods ka istemal karke aap strings ko efficiently handle kar sakte hain.

// Zaroor, yahan aur 10 commonly used JavaScript string methods hain:

// 12. `charAt(index)`:
//     - `charAt()` method specified index par character return karta hai.
//     ```javascript
//     var str = "Hello";
//     console.log(str.charAt(0)); // Output: H
//     console.log(str.charAt(3)); // Output: l
//     ```

// 13. `charCodeAt(index)`:
//     - `charCodeAt()` method specified index par character ka Unicode value return karta hai.
//     ```javascript
//     var str = "Hello";
//     console.log(str.charCodeAt(0)); // Output: 72
//     console.log(str.charCodeAt(3)); // Output: 108
//     ```

// 14. `endsWith(searchString, length)`:
//     - `endsWith()` method string jo specified substring se end hota hai ya nahi check karta hai.
//     ```javascript
//     var str = "Hello World";
//     console.log(str.endsWith('World')); // Output: true
//     console.log(str.endsWith('Hello')); // Output: false
//     ```

// 15. `startsWith(searchString, position)`:
//     - `startsWith()` method string jo specified substring se start hota hai ya nahi check karta hai.
//     ```javascript
//     var str = "Hello World";
//     console.log(str.startsWith('Hello')); // Output: true
//     console.log(str.startsWith('World')); // Output: false
//     ```

// 16. `includes(searchString, position)`:
//     - `includes()` method string mein specified substring hai ya nahi check karta hai.
//     ```javascript
//     var str = "Hello World";
//     console.log(str.includes('World')); // Output: true
//     console.log(str.includes('JavaScript')); // Output: false
//     ```

// 17. `repeat(count)`:
//     - `repeat()` method string ko specified count ke number of times repeat karta hai.
//     ```javascript
//     var str = "Hello";
//     console.log(str.repeat(3)); // Output: HelloHelloHello
//     ```

// 18. `padStart(targetLength, padString)`:
//     - `padStart()` method string ko specified length tak pad karta hai, starting mein padString se.
//     ```javascript
//     var str = "5";
//     console.log(str.padStart(4, '0')); // Output: 0005
//     ```

// 19. `padEnd(targetLength, padString)`:
//     - `padEnd()` method string ko specified length tak pad karta hai, ending mein padString se.
//     ```javascript
//     var str = "5";
//     console.log(str.padEnd(4, '0')); // Output: 5000
//     ```

// 20. `toLowerCase()`:
//     - `toLowerCase()` method string ke har character ko lowercase mein convert karta hai.
//     ```javascript
//     var str = "HELLO";
//     console.log(str.toLowerCase()); // Output: hello
//     ```

// 21. `toUpperCase()`:
//     - `toUpperCase()` method string ke har character ko uppercase mein convert karta hai.
//     ```javascript
//     var str = "hello";
//     console.log(str.toUpperCase()); // Output: HELLO
//     ```

// In methods ka istemal karke, aap strings ko manipulate karne aur un par various operations perform karne mein saksham hote hain.

// Bilkul, yahan aur 10 commonly used JavaScript string methods 
// 22. `trimStart()` / `trimLeft()`:
//     - `trimStart()` method string ke shuru mein se extra spaces ko remove karta hai.
//     - `trimLeft()` ka purana naam hai, lekin aaj kal mostly `trimStart()` ka istemal hota hai.
//     ```javascript
//     var str = "   Hello";
//     console.log(str.trimStart()); // Output: "Hello"
//     ```

// 23. `trimEnd()` / `trimRight()`:
//     - `trimEnd()` method string ke ant mein se extra spaces ko remove karta hai.
//     - `trimRight()` ka purana naam hai, lekin aaj kal mostly `trimEnd()` ka istemal hota hai.
//     ```javascript
//     var str = "Hello   ";
//     console.log(str.trimEnd()); // Output: "Hello"
//     ```

// 24. `match(regexp)`:
//     - `match()` method string ko specified regular expression ke sath match karta hai aur ek array return karta hai jismein matches hote hain.
//     ```javascript
//     var str = "Hello World";
//     console.log(str.match(/o/g)); // Output: ["o", "o"]
//     ```

// 25. `search(regexp)`:
//     - `search()` method string mein specified regular expression ke first occurrence ki index return karta hai.
//     ```javascript
//     var str = "Hello World";
//     console.log(str.search(/o/)); // Output: 4
//     ```

// 26. `substring(startIndex, endIndex)`:
//     - `substring()` method specified indices ke beech ke substring ko return karta hai.
//     - Agar endIndex nahi diya gaya hai, to substring startIndex se lekar end tak chalti hai.
//     ```javascript
//     var str = "Hello World";
//     console.log(str.substring(6)); // Output: World
//     console.log(str.substring(0, 5)); // Output: Hello
//     ```

// 27. `substr(startIndex, length)`:
//     - `substr()` method specified index se length tak ka substring return karta hai.
//     ```javascript
//     var str = "Hello World";
//     console.log(str.substr(6, 5)); // Output: World
//     console.log(str.substr(0, 5)); // Output: Hello
//     ```

// 28. `replace(regexp, replacement)`:
//     - `replace()` method string mein specified regular expression ke matches ko replacement string se replace karta hai.
//     ```javascript
//     var str = "Hello World";
//     console.log(str.replace('World', 'JavaScript')); // Output: Hello JavaScript
//     ```

// 29. `concat(str1, str2, ...)`:
//     - `concat()` method ek ya zyada strings ko ek sath concatenate karke naya string return karta hai.
//     ```javascript
//     var str1 = "Hello";
//     var str2 = "World";
//     console.log(str1.concat(' ', str2)); // Output: Hello World
//     ```

// 30. `toLocaleLowerCase()`:
//     - `toLocaleLowerCase()` method string ke har character ko locale ke hisaab se lowercase mein convert karta hai.
//     ```javascript
//     var str = "HELLO";
//     console.log(str.toLocaleLowerCase()); // Output: hello
//     ```

// In methods ka istemal karke, aap strings ko manipulate karne aur un par various operations perform karne mein saksham hote hain.