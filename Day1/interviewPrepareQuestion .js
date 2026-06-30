// Sahi answer:

// 2. == aur === mein kya fark hai? Example ke saath batao. 🎯
// "== sirf value compare karta hai — type convert kar deta hai comparison se pehle (loose equality).
// === value aur type dono check karta hai — koi conversion nahi (strict equality).”

// 3. typeof null kya return karta hai? Aur kyun yeh JavaScript ka famous bug hai?
// console.log(typeof null); // “object"
// "typeof null returns 'object' — yeh JavaScript ka ek historical bug hai jo 1995 se chala aa raha hai. Backward compatibility ki wajah se kabhi fix nahi kiya gaya. null actually ek primitive value hai, object nahi.”
// typeof null        // "object"  ❌ (bug)
// typeof undefined   // "undefined" ✅
// typeof 123         // "number" ✅
// typeof "hello"     // "string" ✅
// typeof true        // "boolean" ✅
// typeof {}          // "object" ✅
// typeof []           // "object" (array bhi object hai)
// typeof function(){} // "function" ✅

// 4. Primitive aur Non-primitive data types mein kya fark hai? Examples do.
// Primitive types — String, Number, Boolean, Null, Undefined, Symbol, BigInt. Yeh Stack memory mein store hote hain aur copy by value hote hain.
// Primitive (7 types): String, Number, Boolean, Null, Undefined, Symbol, BigInt

// Non-Primitive — Array, Object, Function. Yeh Heap memory mein store hote hain aur copy by reference hote hain.
// Non-Primitive (Reference types): Array, Object, Function
// // Primitive — copy by value
// let a = 5;
// let b = a;
// b = 10;
// console.log(a); // 5 — safe rehta hai

// // Non-primitive — copy by reference
// let obj1 = { x: 5 };
// let obj2 = obj1;
// obj2.x = 10;
// console.log(obj1.x); // 10 — change ho gaya!

// 5. Arrow function aur normal function mein kya fark hai?
// Sahi & Complete Answer:

// Sabse bada fark this keyword ka hai. Normal function ka apna this hota hai jo us object ko refer karta hai jisne function ko call kiya. Arrow function ka apna this nahi hota — yeh apne surrounding lexical scope se this leta hai. Isliye object methods mein normal function use karte hain, callbacks mein arrow function use karte hain.”

// 6. Hoisting kya hai? Example do.
// "Hoisting JavaScript ka woh behavior hai jisme variable aur function declarations execution se pehle memory mein move ho jaati hain — code ke top par. Lekin sirf declaration hoist hoti hai,
// TDZ value/initialization nahi.”

// // 1. var — hoist hota hai, undefined milta hai
// console.log(a); // undefined
// var a = 5;

// // 2. let/const — hoist hote hain, but TDZ mein
// console.log(b); // ReferenceError
// let b = 5;

// // 3. Function declaration — poora hoist hota hai
// greet(); // "Hello" — kaam karta hai!
// function greet() {
//   console.log("Hello");
// }

// // 4. Function expression — hoist nahi hota
// sayHi(); // ❌ Error
// const sayHi = function() {
//   console.log("Hi");
// };

// 7. Scope chain kya hai?
// Scope chain woh mechanism hai jisse JavaScript decide karta hai ki ek variable kahan se access karna hai. Agar variable current scope mein nahi milta, JS upar wale (outer) scope mein dhundhta hai — yeh chain tab tak chalti hai jab tak global scope tak na pahunch jaaye.
// let a = "global";

// function outer() {
//   let b = "outer";

//   function inner() {
//     let c = "inner";
//     console.log(a); // "global" — chain se mila
//     console.log(b); // "outer" — chain se mila
//     console.log(c); // "inner" — apna hai
//   }

//   inner();
// }

// outer();
// inner() dhundta hai 'a'
//   → apne scope mein nahi mila
//   → outer() ke scope mein dekha
//     → wahan bhi nahi mila
//     → global scope mein dekha
//       → mil gaya! “global"

// Scope chain = inner se outer ki taraf dhundhne ka process. Yeh Lexical Scope se directly connected hai — jahan function likha gaya hai, wahi uski scope chain decide karta hai.

// 8. this keyword kaise kaam karta hai — normal function vs arrow function mein?

// Normal function ka apna this hota hai — jo object usse call karta hai, this usi ko refer karta hai (dynamic binding).
// Arrow function ka apna this nahi hota — yeh lexical scoping follow karta hai, matlab apne surrounding (outer) scope se this uthata hai.

// 9. Closure kya hai? Real example do.
// Closure ek aisa function hai jo apne outer function ke variables ko yaad rakhta hai — even after outer function execution complete ho jaaye. Inner function apne lexical scope ko 'remember' karta hai.
// Data privacy — private variables banana (bank account jaisa)
// Memoization — expensive calculations cache karna
// Event handlers / Callbacks — state yaad rakhna

// 10. map, filter, aur reduce mein kya fark hai?
// Final Answer — Interview Ready:
// map() — har element ko transform karta hai aur same-size naya array return karta hai.filter() — condition ke basis pe elements select karta hai, naya (chota) array return karta hai.reduce() — saare elements ko combine karke ek single value return karta hai — yeh array nahi hota.

// 11. slice vs splice mein kya fark hai?
// slice() — original array ko change nahi karta. Copy return karta hai (start, end index ke beech ka part).
// splice() — original array ko change kar deta hai. Elements remove/add karta hai aur jo hataya woh return karta hai."
// let arr = ["a", "b", "c", "d", "e"];

// // SLICE — original safe
// let sliced = arr.slice(1, 3);
// console.log(sliced); // ["b", "c"]
// console.log(arr);    // ["a","b","c","d","e"] — same hai!

// // SPLICE — original badal jaata hai
// let spliced = arr.splice(1, 2);
// console.log(spliced); // ["b", "c"]
// console.log(arr);     // ["a","d","e"] — change ho gaya!

// 12. Shallow copy aur Deep copy mein kya fark hai?
// Shallow copy — sirf pehla level copy karta hai. Agar object ke andar nested object hai, woh abhi bhi same reference share karta hai.
// Deep copy — poora independent copy banata hai, nested objects bhi alag ho jaate hain.
// "Shallow = upar ka layer safe, andar ka leak hota hai.
// let user1 = {
//   name: "Shubham",
//   address: { city: "Gurgaon" }
// };

// // SHALLOW COPY
// let user2 = { ...user1 };
// user2.address.city = "Delhi";
// console.log(user1.address.city); // "Delhi" ❌ — change ho gaya!

// // DEEP COPY
// let user3 = JSON.parse(JSON.stringify(user1));
// user3.address.city = "Noida";
// console.log(user1.address.city); // safe rehta hai ✅
// 13. Promise kya hai? .then() kaise kaam karta hai?
// Promise ek object hai jo represent karta hai ki ek asynchronous operation (jaise API call) ka result future mein milega. Promise 3 states mein hota hai:
// Pending — operation chal raha hai
// Fulfilled/Resolved — successfully complete hua
// Rejected — error aaya
// .then() tab chalta hai jab promise resolve ho jaata hai — yeh result ko handle karta hai. .catch() error handle karta hai.
// "Promise = ek future promise ki value milegi. .then = success case handle karo. .catch = error case handle karo.”

// fetch("https://api.example.com/data")
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.log("Error:", error));

// _____________________________Manually__________________________
// const myPromise = new Promise((resolve, reject) => {
//   let success = true;
//   if (success) {
//     resolve("Data mil gaya!");
//   } else {
//     reject("Error aaya!");
//   }
// });

// myPromise
//   .then(result => console.log(result))
//   .catch(error => console.log(error));

// 14. async/await kya hai — Promise se kaise better hai?
// async/await Promises ko handle karne ka modern, cleaner tarika hai. async function hamesha Promise return karta hai. await Promise ke resolve hone ka wait karta hai — code synchronous jaisa dikhta hai lekin asynchronous behave karta hai. Errors try/catch se handle karte hain, .then/.catch ki jagah.”
// // Promise way — chaining
// fetch("/api/data")
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// // Async/Await way — cleaner
// async function getData() {
//   try {
//     const res = await fetch("/api/data");
//     const data = await res.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }
// getData();

// "Code padhne mein aasan hai — top to bottom flow follow karta hai, jaise normal synchronous code. Multiple .then().then().then() chaining se bachata hai (callback hell se bhi).”

// 15. Event Loop kya hai?
// Event Loop JavaScript ka mechanism hai jo asynchronous code manage karta hai. JS single-threaded hai — ek time pe ek kaam karta hai. Event Loop check karta hai ki Call Stack khali hai ya nahi. Agar khali hai, toh Callback Queue / Microtask Queue se pending functions ko call stack mein push karta hai.
// Event Loop = traffic police. Call Stack ko priority deta hai. Jab Call Stack khali ho, tab Queue se naya kaam bhejta hai.

// 16. Debouncing vs Throttling mein kya fark hai?
// Debouncing — function ko tab tak call nahi karte jab tak user rukta nahi hai. Har naye input pe timer reset ho jaata hai. Sirf last input ke baad, specific delay ke baad function chalta hai.
// Throttling — function ko fixed time interval mein ek hi baar chalne dete hain — chahe event kitni baar bhi trigger ho.”
// // Search box — user type kar raha hai
// // API tab hi call ho jab user ruk jaye 500ms ke liye

// function debounce(func, delay) {
//   let timer;
//   return function(...args) {
//     clearTimeout(timer);
//     timer = setTimeout(() => func(...args), delay);
//   };
// }

// Use case: Search bar, form validation
// // Scroll event — bahut baar trigger hota hai
// // Sirf har 200ms mein ek baar function chale

// function throttle(func, limit) {
//   let inThrottle;
//   return function(...args) {
//     if (!inThrottle) {
//       func(...args);
//       inThrottle = true;
//       setTimeout(() => inThrottle = false, limit);
//     }
//   };
// }
// 17. null aur undefined mein kya fark hai?
// "undefined — JS khud assign karta hai jab variable declare hua but value nahi di gayi.
// null — developer khud manually assign karta hai jab woh batana chahta hai 'yahan intentionally kuch nahi hai’."
// console.log(typeof null); // "object" (yaad hai? bug hai yeh)
// console.log(null == undefined); // true (loose)
// console.log(null === undefined); // false (strict, type alag hai)

// 18. Spread operator aur Rest operator mein syntax same hai (...) — toh JS kaise pehchanta hai kaunsa use ho raha hai?
// Spread — jab array/object ke andar values nikalni ho (expand karna)
// Rest — jab function parameters mein ya destructuring mein multiple values collect karni ho”
// "Agar ... right side pe hai (value create karte waqt) — Spread.
// Agar ... left side pe hai (function parameter ya destructuring mein) — Rest.”

// let [first, ...rest] = [1, 2, 3, 4]; // Rest — collect kar raha
// let newArr = [...rest, 5];           // Spread — expand kar raha

// 19. forEach aur map mein kya fark hai?
// "forEach — sirf array pe loop chalata hai, kuch return nahi karta (undefined milta hai).
// map — array pe loop chalata hai aur naya array return karta hai.”

// let nums = [1, 2, 3];

// // forEach — kuch return nahi hota
// let result1 = nums.forEach(n => n * 2);
// console.log(result1); // undefined ❌

// // map — naya array milta hai
// let result2 = nums.map(n => n * 2);
// console.log(result2); // [2, 4, 6] ✅

// Method.                     Kab use karo
// forEach       Sirf kuch karna hai (print, API call) — naya array nahi chahiye
// map           Naya transformed array chahiye

// "forEach = sirf kaam karo, kuch wapas mat do.
// map = kaam karo aur naya array wapas do.”

// 20. Pure function kya hota hai?
// Same input dene pe hamesha same output deta hai
// Bahar ki koi cheez change nahi karta (no side effects)"
// Pure function
// function add(a, b) {
//   return a + b;
// }

// add(2, 3); // hamesha 5 hi aayega
// add(2, 3); // hamesha 5 hi aayega
// Impure function
// let total = 0;

// function addToTotal(num) {
//   total += num; // BAHAR ki variable change kar di — IMPURE
//   return total;
// }

// addToTotal(5); // 5
// addToTotal(5); // 10 — same input, different output!

//
// 21. Callback function kya hota hai?
// "Callback function woh function hai jo doosre function ko parameter ki tarah pass kiya jaata hai, aur baad mein call/run kiya jaata hai.”

// function greet(name, callback) {
//   console.log("Hello", name);
//   callback(); // yahan call hua
// }

// function sayBye() {
//   console.log("Bye!");
// }

// greet("Shubham", sayBye);
// // Output:
// // Hello Shubham
// // Bye!

// // map, filter, forEach mein jo function pass karte ho
// // wahi callback hai

// [1, 2, 3].map(function(num) {  // yeh callback hai
//   return num * 2;
// });

// button.addEventListener("click", function() {  // yeh bhi callback hai
//   console.log("Clicked!");
// });

// setTimeout(function() {  // callback
//   console.log("3 second baad chala");
// }, 3000);

// "Callback = function jo doosre function ko diya jaata hai, baad mein chalane ke liye. .map(), .filter(), addEventListener, setTimeout — sab callback use karte hain.”

// 22. Higher Order Function kya hota hai?
// Doosre function ko parameter ki tarah leta hai, YA
// Doosra function return karta hai"

// function higherOrder(callback) {
//   callback();
// }

// higherOrder(() => console.log(“Hello"));

// map, filter, reduce — sab Higher Order Functions hain kyunki yeh function ko parameter leti hain.

// function multiply(a) {
//   return function(b) {
//     return a * b;
//   }
// }

// const double = multiply(2);
// console.log(double(5)); // 10

// "Agar function — kisi aur function ko leta hai ya deta hai — woh Higher Order Function hai. map, filter, reduce, aur tumhara closure wala counter — sab HOF examples hain."
// let nums = [1, 2, 3, 4, 5];
// nums.map(n => n * 2);              // [2,4,6,8,10] — array
// nums.filter(n => n % 2 === 0);     // [2,4] — array
// nums.reduce((sum, n) => sum + n, 0); // 15 — number, not array!
