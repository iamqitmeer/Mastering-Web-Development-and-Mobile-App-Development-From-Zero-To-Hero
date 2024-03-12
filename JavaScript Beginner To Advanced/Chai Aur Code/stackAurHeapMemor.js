// Stack aur Heap memory dono programming languages mein important concepts hain, jaise ki JavaScript mein bhi. Yeh memory allocation ke tareeqon ko describe karte hain. Chaliye in dono ko detail mein samjhte hain:

// 1. Stack Memory:
//    - Stack memory ek data structure hai jo function calls aur local variables ke liye reserve hota hai.
//    - Jab aap kisi function ko call karte hain, us function ke liye ek naya frame stack memory mein create hota hai. Is frame mein function ke parameters, local variables, aur return address store hote hain.
//    - Jab function ka execution complete hota hai, uska frame stack se remove ho jata hai.
//    - Stack memory ki allocation automatic hoti hai, aur stack ka size fixed hota hai.
//    - JavaScript mein primitive data types aur function references stack memory mein store hote hain.
//    - Stack memory ki access speed heap memory ke mukable jyada hoti hai, lekin stack ka size limit hota hai.
//    - Recursive functions stack overflow error ko cause kar sakti hain agar stack space khatam ho jata hai.

// 2. Heap Memory:
//    - Heap memory dynamic memory allocation ke liye reserve hoti hai.
//    - Heap memory mein objects, arrays, aur non-primitive data types ka storage hota hai.
//    - JavaScript mein heap memory allocation automatic hoti hai, aur developer ko explicit memory management ki zarurat nahi hoti.
//    - Heap memory ka size dynamic hota hai, aur runtime pe badh sakti hai.
//    - Garbage collection process heap memory ka use kiye gaye resources ko deallocate karti hai jab woh resources kisi variable ya reference se reachable nahi rehte.
//    - JavaScript mein objects ko heap memory mein allocate kiya jata hai, aur unka reference stack memory mein store hota hai.

// Kuch points yaad rakhein:
// - Stack memory local variables aur function calls ke liye reserved hoti hai, jabki heap memory dynamic data allocation ke liye istemal hoti hai.
// - Stack memory ka size fixed hota hai aur allocation automatic hoti hai, jabki heap memory ka size dynamic hota hai aur allocation runtime pe hoti hai.
// - Stack memory ki access speed heap memory se zyada hoti hai, lekin stack ka size limit hota hai.
// - Heap memory mein garbage collection process hoti hai jo unused resources ko free karti hai.
// - Stack overflow error stack memory ki limit exceed hone par generate hota hai, jabki heap memory ka aisa issue nahi hota.
