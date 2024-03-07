// `"use strict";` ka istemal karke JavaScript file ko strict mode mein activate kiya jata hai, jisse code ke kuch features disabled ho jate hain jo ki errors ko identify aur prevent karte hain. Yeh code quality aur security ko improve karta hai aur future compatibility ko bhi dhyan mein rakhta hai. Isliye, code ke shuruwat mein `"use strict";` ka istemal karna behtar hota hai.

"use strict";
// wese to ye file ke top me likhte he. lekin mene upar theory likhi he is liye me yaha pe likh raha hoo

// example

// myName = "Qitmeer Raza";
// Ab Yaha Pe Mjhe Varieble BanaNa he Lekin Mene Na Var Ka Keyword nhi lagaya. Agar mujhe is Varieble ki value change krni he to ye smjhe ga ke ham eik new Varieble bana rah he is ka solution he "use strict"; ye laga ke ham is kaam ka solution nikaal skte he.
// console.log(myName); // Uncaught ReferenceError: myName is not defined


// Agar Ham iske Saath Var Laga Dete he to error resolve ho jayega
var fullName = 'Qitmeer Raza'
console.log(fullName)
