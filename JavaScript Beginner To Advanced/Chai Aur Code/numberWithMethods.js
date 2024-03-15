// Zaroor, yahan kuch commonly used JavaScript Number methods hain, jo numbers ke saath kaam karne mein madad karte hain:

// 1. `toFixed(digits)`:
//    - `toFixed()` method number ko fixed-point notation mein convert karta hai, aur specify kiye gaye digits ke number of decimal places tak round karta hai.
//    ```javascript
//    var num = 10.456;
//    console.log(num.toFixed(2)); // Output: "10.46"
//    ```

// 2. `toPrecision(precision)`:
//    - `toPrecision()` method number ko specified precision tak format karta hai.
//    ```javascript
//    var num = 12345.6789;
//    console.log(num.toPrecision(4)); // Output: "1.235e+4"
//    ```

// 3. `toString(radix)`:
//    - `toString()` method number ko specified radix (base) mein string mein convert karta hai.
//    - Default radix 10 hota hai, lekin aap 2 se lekar 36 tak koi bhi radix specify kar sakte hain.
//    ```javascript
//    var num = 255;
//    console.log(num.toString(16)); // Output: "ff"
//    ```

// 4. `toExponential(fractionDigits)`:
//    - `toExponential()` method number ko exponential notation mein convert karta hai.
//    ```javascript
//    var num = 12345.6789;
//    console.log(num.toExponential(2)); // Output: "1.23e+4"
//    ```

// 5. `valueOf()`:
//    - `valueOf()` method number ka primitive value return karta hai.
//    ```javascript
//    var num = new Number(10);
//    console.log(num.valueOf()); // Output: 10
//    ```

// 6. `parseInt(string, radix)`:
//    - `parseInt()` method string ko integer mein convert karta hai.
//    - Radix ka optional parameter hota hai, jisse aap specify kar sakte hain ki kis base mein number hai.
//    ```javascript
//    var str = "123";
//    console.log(parseInt(str)); // Output: 123
//    ```

// 7. `parseFloat(string)`:
//    - `parseFloat()` method string ko floating point number mein convert karta hai.
//    ```javascript
//    var str = "123.45";
//    console.log(parseFloat(str)); // Output: 123.45
//    ```

// 8. `isNaN(value)`:
//    - `isNaN()` method value ko NaN (Not-a-Number) hone par true return karta hai.
//    ```javascript
//    console.log(isNaN(123)); // Output: false
//    console.log(isNaN("Hello")); // Output: true
//    ```

// 9. `isFinite(value)`:
//    - `isFinite()` method value ko finite number hone par true return karta hai.
//    ```javascript
//    console.log(isFinite(123)); // Output: true
//    console.log(isFinite(Infinity)); // Output: false
//    ```

// 10. `isInteger(value)`:
//     - `isInteger()` method value ko integer hone par true return karta hai.
//     ```javascript
//     console.log(Number.isInteger(123)); // Output: true
//     console.log(Number.isInteger(123.45)); // Output: false
//     ```

// Yeh methods JavaScript mein numbers ke saath kaam karne mein madad karte hain, aur unka istemal karke aap numbers ko format, convert, aur check kar sakte hain.

// Bilkul, yahan aur 20 commonly used JavaScript Number methods hain:

// 11. `Number.parseInt(string, radix)`:
//     - `Number.parseInt()` method string ko integer mein convert karta hai, jaise `parseInt()` method.
//     ```javascript
//     var str = "123";
//     console.log(Number.parseInt(str)); // Output: 123
//     ```

// 12. `Number.parseFloat(string)`:
//     - `Number.parseFloat()` method string ko floating point number mein convert karta hai, jaise `parseFloat()` method.
//     ```javascript
//     var str = "123.45";
//     console.log(Number.parseFloat(str)); // Output: 123.45
//     ```

// 13. `Number.isNaN(value)`:
//     - `Number.isNaN()` method value ko NaN (Not-a-Number) hone par true return karta hai, lekin agar value NaN nahi hai aur primitive data type number hai, toh false return karta hai.
//     ```javascript
//     console.log(Number.isNaN(NaN)); // Output: true
//     console.log(Number.isNaN("Hello")); // Output: false
//     ```

// 14. `Number.isFinite(value)`:
//     - `Number.isFinite()` method value ko finite number hone par true return karta hai.
//     ```javascript
//     console.log(Number.isFinite(123)); // Output: true
//     console.log(Number.isFinite(Infinity)); // Output: false
//     ```

// 15. `Number.isInteger(value)`:
//     - `Number.isInteger()` method value ko integer hone par true return karta hai.
//     ```javascript
//     console.log(Number.isInteger(123)); // Output: true
//     console.log(Number.isInteger(123.45)); // Output: false
//     ```

// 16. `Number.parseFloat(value)`:
//     - `Number.parseFloat()` method string ya number ko floating point number mein convert karta hai.
//     ```javascript
//     console.log(Number.parseFloat("123.45")); // Output: 123.45
//     console.log(Number.parseFloat(123.45)); // Output: 123.45
//     ```

// 17. `Number.isSafeInteger(value)`:
//     - `Number.isSafeInteger()` method value ko safe integer hone par true return karta hai.
//     - Safe integer wo hota hai jo ECMAScript ki integer range [-2^53, 2^53] ke andar ho.
//     ```javascript
//     console.log(Number.isSafeInteger(123456)); // Output: true
//     console.log(Number.isSafeInteger(Math.pow(2, 53))); // Output: false
//     ```

// 18. `Number.MAX_VALUE`:
//     - `Number.MAX_VALUE` property JavaScript mein highest possible numeric value ko represent karta hai.
//     ```javascript
//     console.log(Number.MAX_VALUE); // Output: 1.7976931348623157e+308
//     ```

// 19. `Number.MIN_VALUE`:
//     - `Number.MIN_VALUE` property JavaScript mein smallest possible positive numeric value ko represent karta hai.
//     ```javascript
//     console.log(Number.MIN_VALUE); // Output: 5e-324
//     ```

// 20. `Number.EPSILON`:
//     - `Number.EPSILON` property JavaScript mein smallest possible difference between two representable numbers ko represent karta hai.
//     ```javascript
//     console.log(Number.EPSILON); // Output: 2.220446049250313e-16
//     ```

// 21. `Number.NEGATIVE_INFINITY`:
//     - `Number.NEGATIVE_INFINITY` property JavaScript mein negative infinity ko represent karta hai.
//     ```javascript
//     console.log(Number.NEGATIVE_INFINITY); // Output: -Infinity
//     ```

// 22. `Number.POSITIVE_INFINITY`:
//     - `Number.POSITIVE_INFINITY` property JavaScript mein positive infinity ko represent karta hai.
//     ```javascript
//     console.log(Number.POSITIVE_INFINITY); // Output: Infinity
//     ```

// 23. `Number.prototype.toPrecision(precision)`:
//     - `toPrecision()` method number ko specified precision tak format karta hai.
//     ```javascript
//     var num = 12345.6789;
//     console.log(num.toPrecision(4)); // Output: "1.235e+4"
//     ```

// 24. `Number.prototype.toFixed(digits)`:
//     - `toFixed()` method number ko fixed-point notation mein convert karta hai, aur specify kiye gaye digits ke number of decimal places tak round karta hai.
//     ```javascript
//     var num = 10.456;
//     console.log(num.toFixed(2)); // Output: "10.46"
//     ```

// 25. `Number.prototype.toExponential(fractionDigits)`:
//     - `toExponential()` method number ko exponential notation mein convert karta hai.
//     ```javascript
//     var num = 12345.6789;
//     console.log(num.toExponential(2)); // Output: "1.23e+4"
//     ```

// In methods ka istemal karke, aap numbers ko format, convert, aur check kar sakte hain, aur unka istemal karke various mathematical operations perform kar sakte hain.

// Zaroor, yahan aur 10 commonly used JavaScript Number methods hain:

// 26. `Number.prototype.toFixed(digits)`:
//     - `toFixed()` method number ko fixed-point notation mein convert karta hai, aur specify kiye gaye digits ke number of decimal places tak round karta hai.
//     ```javascript
//     var num = 10.456;
//     console.log(num.toFixed(2)); // Output: "10.46"
//     ```

// 27. `Number.prototype.toExponential(fractionDigits)`:
//     - `toExponential()` method number ko exponential notation mein convert karta hai.
//     ```javascript
//     var num = 12345.6789;
//     console.log(num.toExponential(2)); // Output: "1.23e+4"
//     ```

// 28. `Number.prototype.toString(radix)`:
//     - `toString()` method number ko specified radix (base) mein string mein convert karta hai.
//     - Default radix 10 hota hai, lekin aap 2 se lekar 36 tak koi bhi radix specify kar sakte hain.
//     ```javascript
//     var num = 255;
//     console.log(num.toString(16)); // Output: "ff"
//     ```

// 29. `Number.prototype.valueOf()`:
//     - `valueOf()` method number ka primitive value return karta hai.
//     ```javascript
//     var num = new Number(10);
//     console.log(num.valueOf()); // Output: 10
//     ```

// 30. `Number.prototype.toLocaleString(locales, options)`:
//     - `toLocaleString()` method number ko specified locale ke hisaab se localized string mein convert karta hai.
//     ```javascript
//     var num = 1234567.89;
//     console.log(num.toLocaleString('en-US')); // Output: "1,234,567.89"
//     ```

// 31. `Number.prototype.isInteger()`:
//     - `isInteger()` method number ko integer hai ya nahi check karta hai.
//     ```javascript
//     var num1 = 10;
//     var num2 = 10.5;
//     console.log(Number.isInteger(num1)); // Output: true
//     console.log(Number.isInteger(num2)); // Output: false
//     ```

// 32. `Number.prototype.isSafeInteger()`:
//     - `isSafeInteger()` method number ko safe integer hai ya nahi check karta hai.
//     ```javascript
//     console.log(Number.isSafeInteger(123456)); // Output: true
//     console.log(Number.isSafeInteger(Math.pow(2, 53))); // Output: false
//     ```

// 33. `Number.prototype.toPrecision(precision)`:
//     - `toPrecision()` method number ko specified precision tak format karta hai.
//     ```javascript
//     var num = 12345.6789;
//     console.log(num.toPrecision(4)); // Output: "1.235e+4"
//     ```

// 34. `Number.prototype.toString()`:
//     - `toString()` method number ko string mein convert karta hai.
//     ```javascript
//     var num = 123;
//     console.log(num.toString()); // Output: "123"
//     ```

// 35. `Number.prototype.toPrecision()`:
//     - `toPrecision()` method number ko string ke roop mein specified precision ke saath convert karta hai.
//     ```javascript
//     var num = 12345.6789;
//     console.log(num.toPrecision(4)); // Output: "1.235e+4"
//     ```

// In methods ka istemal karke, aap numbers ko format, convert, aur check kar sakte hain, aur unka istemal karke various mathematical operations perform kar sakte hain.