// let name = "shubham";
// let age = 22;
// let city = "Gurgaon";

// console.log(name);
// console.log(age);
// console.log(city);

// Variables + Data Types

// let Name = "shubham";
// let Age = 26;
// const city = "gurgaon";
// var Job = "developer";

// console.log(Name);
// console.log(Age);
// console.log(city);
// console.log(Job);

// let isStudent = true;
// let salary = null;
// let future;
// let score = 9.5;

// let score = 88;

// console.log(typeof score);

// Problem 1 — Variables + DataTypes

// Apna ek "profile" banao
// name, age, city, isDeveloper, salary store karo
// Har ek ka typeof print karo

// let name = "shubham";
// let age = 26;
// let city = "Gurgaon";
// let isDeveloper = "yes";
// let salary = 52000;

// console.log(name);
// console.log(age);
// console.log(city);
// console.log(isDeveloper);
// console.log(salary);

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof city);
// console.log(typeof isDeveloper);
// console.log(typeof salary);

// problem 2
// let str = "  Hello Shubham  ";
// 1. Spaces hatao dono taraf
// 2. Uppercase mein karo
// 3. "Shubham" ko "Developer" se replace karo
// 4. Kitne characters hain — length nikalo

// let str = "  Hello Shubham  ";
// console.log(str);
// let trimSpace = str.slice(1, -1);
// console.log(trimSpace);
// let upCase = trimSpace.toUpperCase();
// console.log(upCase);
// let leg = upCase.length; //when i put length() showing     upCase.length is not a function
// console.log(leg);
// let rep = str.replace("  Shubham", "Developer").trim(); //check form goole but not get
// console.log(rep);

// Problem 3 — Number + Math
// 1. 2 numbers ka max nikalo Math se
// 2. 3.7 ko round karo
// 3. Random number nikalo 1 se 10 ke beech

// Problem 4 — Array
// let fruits = ["apple", "mango", "banana", "orange"];
// 1. Pehla aur aakhri element nikalo
// 2. "grapes" add karo end mein
// 3. Pehla element remove karo
// 4. "banana" ka index nikalo

// let app = fruits.length;
// let app = fruits.slice(1, -1);
// console.log(app); //Pehla aur aakhri element nikalo
// let app_1 = fruits.push("grapes");
// console.log(app_1); // its showing 5 in console
// let app_2 = fruits.splice(1);
// console.log(app_2); //Done
// let app_3 = fruits.indexOf();
// console.log(app_3);

// console.log(fruits[0]); // pehla
// console.log(fruits[fruits.length - 1]); // aakhri

// Problem 5 — Array methods
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 1. Sirf even numbers nikalo — filter use karo
// 2. Har number ko double karo — map use karo
// 3. Sab ka sum nikalo — reduce use karo

// console.log(
//   "evern numbers = ",
//   numbers.filter((num) => 2 % 2 === 0),
// );
// console.log(numbers.map((num) => num * num));

// console.log(numbers.reduce(total, (num) => total + num, 0));

let sum = numbers.reduce((total, num) => total + num, 0);
// console.log(sum);

// Apna ek user object banao
// name, age, city, skills (array), isEmployed
// 1. skills mein "React" add karo
// 2. Object.keys() se saari keys print karo
// 3. Object.values() se saari values print karo
// 4. city delete karo object se

// let arr = ["a", "b", "c", "d", "e"];
// 1. slice se index 1 to 3 nikalo — original check karo
// 2. splice se index 2 pe 1 element hatao — original check karo
// Dono ka fark comment mein likho

// let slic = arr.slice(1, 2, 3);
// console.log(slic);
// console.log(arr);
// let spli = arr.splice(2, 1);
// console.log(spli);
// console.log(arr);
// Slice copy deta hai, splice original todta hai.

// 1. Max nikalo
// console.log(Math.max(10, 45, 23, 67, 12));

// 2. Round karo
// console.log(Math.round(3.7));

// 3. Random 1 to 10
let random = Math.floor(Math.random() * 10) + 1;
// console.log(random);

// Apna ek user object banao
// name, age, city, skills (array), isEmployed
// 1. skills mein "React" add karo
// 2. Object.keys() se saari keys print karo
// 3. Object.values() se saari values print karo
// 4. city delete karo object se

// let user = {
//   name: "shubham",
//   city: "gurgaon",
//   age: 27,
//   skil: ["html", "css", "javascript"],
//   isEmployed: true,
// };
// console.log(Object.keys(user));
// console.log(Object.values(user));
// user.skil.push("react");
// console.log(user.skil);
// delete user.city;
// console.log(user);
// function outer() {
//   let count = 0;

//   return function () {
//     count++;
//     console.log(count);
//   };
// }

// const a = outer();
// const b = outer();

// a();
// a();
// b();
// a();
// b();
// user = {
//   name: "shubham",
//   age: "age",
// };

// console.log(user.name);

// class user {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log(`user name is ${this.name} and ${this.age}`);
//   }
// }
// const user1 = new user("shubham", 26);
// user1.greet();

// Ek function banao jo 2 numbers ka sum return kare
// aur result print karo

// function sumnum(num1, num2) {
//   let res = num1 + num2;
//   console.log("Result = ", res);
//   return res;
// }
// sumnum(2, 5);

// const sumn = (num1, num2) => num1 + num2;

// console.log(sumn(2, 3));

// User object banao
// Function mein pass karo
// Name aur age print karo

// const user = {
//   name: "Shubham",
//   age: 26,
//   city: "Gurgaon",
// };

// Ab function banao jo user object le aur print kare

// function printuser(obj) {
//   console.log("Name :", user.name);
//   console.log("Age :", user.age);
// }
// printuser(user);

// Ek object banao - name, salary
// Ek method banao jo this.name use kare
// Arrow function se same karo - fark dekho

// let user = {
//   name: "shubham",
//   Salary: 1000,

//   showInfo: function Data(Info) {
//     console.log(this.name);
//     console.log(this.Salary);
//   },
// };
// user.showInfo();

//Normal function ek naukri pe join karne wala hai — jo company mein aaya, company ka naam le sakta hai (this = apni company).
// Arrow function ek freelancer hai — uski khud ki koi company nahi. Bahar jaake poochega this kya hai — toh undefined milega.
//Interview mein yeh bolo:

//"Arrow function ka apna this nahi hota. Yeh surrounding scope se this uthata hai. Isliye object methods mein normal function use karte hain."
// let user = {
//   name: "shubham",
//   Salary: 1000,
//   showInfo: () => {
//     console.log(user.name);
//     console.log(user.Salary);
//   },
// };
// user.showInfo();

// Ek global variable banao - city = "Gurgaon"
// Function ke andar ek local variable banao - city = "Delhi"
// Dono jagah city print karo - kya fark aata hai?

// let city1 = "gurgaon";
// function local() {
//   let city2 = "Delhi";
//   console.log(city2, city1); //"Inner function bahar dekh sakta hai, bahar wala andar nahi dekh sakta."
// }
// console.log(city1, city2);
// local();

// Lexical Scope — proper definition:

// "Ek function apne aaspaas ke variables access kar sakta hai — jahan woh likha gaya hai, wahan ke basis pe. Jahan call kiya gaya hai us basis pe nahi."
//"Lexical scope matlab — function ka scope determine hota hai jahan woh code mein likha gaya hai, na ki jahan se call kiya gaya. Inner function outer ke variables access kar sakta hai, but outer inner ke nahi."

// "Function ko turant chalao aur global scope ko ganda mat karo."
// "IIFE use karte hain taaki variables global scope mein leak na ho. Ek baar chalta hai aur khatam."
// (function Hello() {
//   console.log("Hello Shuham");
// })();

// (() => {
//   console.log("Hellow shubham Pundir");
// })();

// (function dailyReoprt() {
//   let name = "shubham";
//   let city = "gurgaon";
//   let websiteCount = 150;
//   let todayLead = 9878987898;
//   console.log(
//     "shubh realty Daily report ",
//     name,
//     city,
//     websiteCount,
//     todayLead,
//   );
// })();
// console.log("shubh realty Daily report ", name, city, websiteCount, todayLead);
// "IIFE ek aisa function hai jo likha bhi jaata hai aur turant chal bhi jaata hai. Iske andar ke variables bahar kabhi nahi jaate — global scope bilkul safe rehta hai."

// Ek function banao "counter"
// Jo ek inner function return kare
// Har baar call karne pe count 1 badhta rahe
// counter() call karo 3 baar - 1, 2, 3 aana chahiye

// function counter() {
//   let count = 0;
//   return function () {
//     count++;
//     console.log(count);
//   };
// }
// const inc = counter();
// inc();
// inc();
// inc();

// function greet(name) {
//   // yahan kuch return karo
//   return function () {
//     console.log("Hello", name);
//   };
// }

// const sayHello = greet("Shubham");
// sayHello(); // "Hello Shubham"
// sayHello(); // "Hello Shubham"

// Ek function banao "multiply"
// Jo ek number yaad rakhe
// Aur inner function return kare
// Jo koi bhi number us yaad rakhe number se multiply kare

// function number(num1) {
//   return function (num2) {
//     let res = num1 * num2;
//     console.log("multiplay = ", res);
//   };
// }
// const double = number(5);
// double(10);
// double(19);

// Bank account banao
// Starting balance 1000 hai
// deposit karo — balance badhta hai
// withdraw karo — balance ghatta hai
// balance dekho

// function bankAccount() {
//   let balance = 1000;
//   return {
//     deposite: function (amount) {
//       balance += amount;
//       console.log("Deposit = ", amount, "now blance =", balance);
//     },
//     withdraw: function (amount) {
//       balance -= amount;
//       console.log("withdraw = ", amount, "now blance =", balance);
//     },

//     blanceChaeck: function () {
//       console.log("current balance = ", balance);
//     },
//   };
// }

// const myaccount = bankAccount();
// myaccount.deposite(200);
// myaccount.withdraw(10);
// myaccount.blanceChaeck();
// Closure — Final Definition:

// "Jab ek inner function apne outer function ke variables ko yaad rakhta hai — outer function khatam hone ke baad bhi — isse Closure kehte hain."

// 3 cheezein hoti hain closure mein:

// Outer function — variable banata hai
// Inner function — us variable ko use karta hai
// Return — inner function bahar aata hai, variable yaad rehta hai

// Bank example se:
// bankAccount()     ← outer function (khatam ho gaya)
//    balance = 1000 ← variable (yaad hai abhi bhi)
//    deposit()      ← inner function (balance yaad hai)
//    withdraw()     ← inner function (balance yaad hai)

// Interview mein yeh bolo:

// "Closure is a function that remembers the variables from its outer scope even after the outer function has finished executing."

// Optional Chaining (?.)
// const user = {
//   name: "shubham",
//   fullname: null,
//   Age: 26,
// Address: {
//   city: "gurgaon",
//   pincode: 122001,
// },
// };

//console.log(user.name);
//console.log(user?.Address?.city); //Optional Chaining (?.) (show undine if data not avilable that not shoe entire vegar )

// if error show undfine or null then we use nulish coalescing (??) eshmai hum kya krte hai
// if your keft operent is undine or bull then put the
// sign of question mark for future error and we can add custome mssg instead of error
//const fullname = user.fullname ?? "xyz";
//console.log(fullname); //showing null

// logical OR ||
// when value will be falsly  lik 0, empty srtring ,false, undfine, null
// const quantity = 0;
// const result = quantity || 10;
// console.log(result);  //res 10

// Destructuring in JavaScript (Object & Array)
// \This allows you to extract values from an array and assign them to individual variables.
// const user = {
//   name: "shubham",
//   city: "Gurgaon",
//   pin: "122002",
// };
// const { name, city, pin: pincode } = user;
// console.log(name);
// // console.log(pin); //no working after change
// console.log(pincode); //  working
// const colour = ["red", "yellow", "black"];
// const [first, second] = colour;
// console.log(second);

// Shallow & Deep Copy

// shallow copy
// let user = {
//   name: "shubham",
//   lastName: "pundir",
//   Add: {
//     city: "Gurgaon",
//     pincode: 122001,
//   },
// };
// console.log("user =", user.Add.city);
// let user1 = user; //Dono same memory location ko point karte hain. Object assign nahi hua, sirf reference copy hua.
// user1.Add.city = "delhi";
// console.log("user after change city =", user.Add.city);
// console.log("user1 = ", user1.Add.city);

// now using spread operater (Spread operator sirf first level copy karta hai. Nested objects copy nahi hote.)
// Shallow Copy: Creates a new object but nested objects/arrays still share references with the original object.
// let user3 = { ...user }; //Top-level copied, nested objects shared.
// user3.Add.city = "noida";
// console.log("user3 after using spread op = ", user3);
// console.log("user3 after using spread op = ", user);

// Deep copy (Deep copy me har nested object ki bhi new copy banti hai.)
// Original object affect nahi hoga.
//Complete independent copy including nested objects.
// let userDeep = {
//   name: "shubh",
//   lastName: "pundir",
//   Add: {
//     city: "city1",
//     pincode: 122001,
//   },
// };

// const userDeep1 = structuredClone(userDeep);
// const userDeep1 = JSON.parse(JSON.stringify(userDeep));
// userDeep1.Add.city = "city2";
// console.log("userDeep = ", userDeep); // still same city after change
// console.log("userDeep1 = ", userDeep1); //yhn city change hogyi  (this is deep copy )

// One-Line Interview Answer

// Reference copy shares the same memory location.
// Shallow copy creates a new top-level(memory referencedifferent hota hai) object but shares nested references same.
// Deep copy creates a completely independent copy including all nested objects. ✅

// Arrary methods
// map() filter() reduse()

// const user = [
//   { id: 1, name: "shubham", age: 26, price: 200 },
//   { id: 2, name: "ravi", age: 18, price: 1000 },
//   { id: 3, name: "no boday", age: 20, price: 1200 },
// ];
// const nameUp = user.map((user) => user.name.toUpperCase());
// console.log(nameUp);

// console.log(
//   " sum of price ",
//   user
//     .filter((user) => user.age >= 20)
//     .reduce((sum, user) => sum + user.price, 0),
// );

// Apply,Bind & Call Methods

// const userA = {
//   name: "shuham",
//   age: 20,
// };
// const userB = {
//   name: "ravi",
//   age: 23,
// };
// const userc = {
//   name: "ravinder",
//   age: 233,
// };
// console.log(userA.name);
// console.log(userB.name);
// function printDetails(city, country) {
//   console.log(
//     `my name is ${this.name} and age ${this.age} my city is ${city} and ${country}`,
//   );
// }
// printDetails.call(userA, "gurgaon", "india"); // call method invoke immidately with specific this value and argument provided individally
// printDetails.call(userB); // syentex fun.call(this, arg1, arg 2)

// // apply method  agruments gives in array
// // and its working is same
// printDetails.apply(userB, ["noida", "WB"]);

// // bind method. (bind medthod return a new function with fix this context and option arguments without invoke immediately)
// //syntex : constnewfunc= function.bind(thisArg, agr1, arg2..)
// const usercDetails = printDetails.bind(userc, "saharanpur", "IN");
// usercDetails();

// const newData = {
//   name: "rahul",
//   age: 22,
//   greet: function () {
//     console.log(`my name is ${this.name} and my age is ${this.age}`);
//   },
// };
// const newGreet = newData.greet.bind(newData);
// newGreet();

// // slice and splice methods

// let buket = ["apple", "pinapple", "orange", "kiwi"];
// const items = buket.slice(2, 4); //slice(start, end) array ka ek portion return karta hai aur original array ko modify nahi karta.
// console.log(items);
// console.log(buket);

// let item = ["notbook", "errser", "pencil", "shopner"];
// const itemSp = item.splice(2, 1);
// console.log(itemSp); //original array mm change ho jata hai
// console.log(item);

// Ternary Operator & Short-Circuiting

// condition ? "if true" : "if false"; //ternary operator

// const value = 1;
// const final = value >= 10 ? "value is big" : "value is short";
// console.log(final);

// if we using if else case then
// if (value >= 10) {
//   console.log(" value is big ");
// } else {
//   console.log("value is short");
// }

// Prototype & Inheritence in JS
// ye night m study krna hai aaj  lecture 21

// Understanding Set & Map in JavaScript
// const mySet = new Set();
// mySet.add(10);
// mySet.add(30);
// mySet.add(40);
// mySet.add(10);
// mySet.delete(30);
// console.log(mySet);
// mySet.add(80);

// for (const val of mySet) {
//   console.log(val);
// ab humhe val mai 2 se mulitply krna hai
// newVal = val * 2;
// console.log(mySet);
// console.log(newVal);
// }

// Convert Array into Set
// const arr = [1, 2, 3, 3, 4, 5, 5];

// const unique = new Set(arr);

// console.log(unique); //Set(5) { 1, 2, 3, 4, 5 }

// Convert Set back to Array
// const arrr = [...unique];

// console.log(arrr); // [ 1, 2, 3, 4, 5 ]

// Remove Duplicate from Array
// const num = [1, 2, 3, 4, 4, 3, 5, 5];
// const uniq = [...new Set(num)];
// console.log(uniq);

// What is Map?
// Map bhi ek object hai.
// Difference
// Map (Key  → Value). store karta hai.  ex : 101 → Rahul
// Creating Map
// const student = new Map();
// student.set(101, "rahul");
// student.set(102, "shubham");
// student.set(101, "rahul");
// console.log(student); // Map(2) { 101 => 'rahul', 102 => 'shubham' }
// console.log(student.get(101)); //rahul
// console.log(student.has(101)); //true
// console.log(student.delete(102));
// console.log(student);

// Loop in Map
// const map = new Map();
// map.set("html", 100);
// map.set("css", 110);
// map.set("js", 130);
// for (const [key, value] of map) {
//   console.log(key, value);
// }

// Why use Map?
// Object me sirf String, Symbol keys hoti hain.

// Map me
// Object, Array, Function, Number, Anything key ban sakti hai.

//const obj = { name: "shubham" };
//const map = new Map(); //Ek empty Map create hui.
//map.set(obj, "Developer"); //Normal object ki tarah "obj" string key nahi ban rahi.
// Pura object hi key ban raha hai. {name:"Shubham"} ye key ban gaya hai. Aur value "Developer" assign ho gayi hai.
//console.log(map.get(obj)); //"Kya is Map me ye wahi object key ke roop me pada hai?" ✅ Haan

// Ab sabse important concept 👇
//const obj1 = { name: "Shubham" };

//const obj2 = { name: "Shubham" };

//console.log(obj1 === obj2); // false. qki dono alag memory location pe hain. Dono alag objects hain. Same content hone ke bawajood dono alag hain.

// new concept 👇
//const obj1 = { name: "Shubham" };

//const map = new Map();

//map.set(obj1, "Developer");

//const obj2 = { name: "Shubham" }; //Alag object. Alag memory location. Alag reference.

//console.log(map.get(obj2)); // undefined. qki map me obj1 key ke roop me pada hai. obj2 alag hai. Same content hone ke bawajood dono alag hain.

// real life exemple :
// Suppose you have a Map where the keys are user objects. If you create a new user object with the same properties as an existing one, it will not be considered the same key in the Map. This is because each object has a unique reference in memory, even if their contents are identical.

// Object me ye possible nahi
// Object me agar aap same content ke saath alag object create karte ho, toh wo alag key nahi banega. Object me key sirf string ya symbol ho sakta hai. Agar aap same content ke saath alag object create karte ho, toh wo alag key nahi banega. Object me key ko string me convert kar diya jaata hai. Isliye Map ka use hota hai jab hume object ko key ke roop me use karna ho.
// show me easy and understanding exemple for this defination:
// Example:
// const user1 = { id: 1, name: "Alice" };
// const user2 = { id: 1, name: "Alice" };

// const userMap = new Map();
// userMap.set(user1, "User 1 Data");

//console.log(userMap.get(user1)); // Output: "User 1 Data"
//console.log(userMap.get(user2)); // Output: undefined (different reference)
//  m samjha nhi smjhao
// Explanation:
// user1 and user2 have the same content (id: 1, name: "Alice"), but they are two different objects in memory.
// When we set user1 as a key in the Map, it stores the reference to that specific object.
// When we try to get the value using user2, it returns undefined because user2 is a different object reference, even though it has the same properties as user1.
// Good explanation

// Lekin Map me
// same chize ko kese krenge
// same  exemple ko solve kro using map
// Example:
// const user1 = { id: 1, name: "Alice" };
// const user2 = user1; // user2 is now a reference to the same object as user1

// const userMap = new Map();
// userMap.set(user1, "User 1 Data");

// console.log(userMap.get(user1)); // Output: "User 1 Data"
// console.log(userMap.get(user2)); // Output: "User 1 Data" (same reference)
// Explanation:
// Here, user2 is not a new object; it is a reference to the same object as user1.
// Therefore, when we set user1 as a key in the Map, both user1 and user2 point to the same object in memory.
// As a result, when we try to get the value using either user1 or user2, it returns "User 1 Data" because they refer to the same object reference.

// const obj = {};

// const person = { name: "Shubham" };

// obj[person] = "Developer";

// console.log(obj); // {"[object Object]": "Developer"}

// Kya hua?
// Normal object ne person ko string bana diya:
// "[object Object]"
// Isliye plain object me object key properly store nahi hoti.

// const person = { name: "Shubham" };

// const map = new Map();

// map.set(person, "Developer");

// console.log(map.get(person)); // "Developer". Yahi Map ki sabse badi power hai.

// "Map me object key kaise use hoti hai?"

// Map kisi bhi data type ko key bana sakta hai, including objects.
// Object key ko Map uske content se nahi, balki uske reference (memory address) se identify
// karta hai. Isliye agar do alag objects ka data same bhi ho,
// tab bhi Map unhe alag keys maanta hai.

// Event Delegation for Performance Optimization & Event Bubbling
// script wali file check kro

// JavaScript Promises: The Foundation of Async Code

// syntex
// const myPromise = new Promise((resolve, reject) => {
//   if (true) {
//     resolve("");
//   } else {
//     reject("");
//   }
// });
// myPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch(() => {})
//   .finally(() => {});

// now we order the food
// function orderFood(isRestaurentOpen) {
//   return new Promise((resolve, reject) => {
//     console.log("placing order");
//     setTimeout(() => {
//       if (isRestaurentOpen) {
//         resolve("order Received");
//       } else {
//         reject("Restaurent is closed");
//       }
//     }, 3000);
//   });
// }
// orderFood(false)
//   .then((res) => {
//     console.log(res);
//     return "preparing Food";
//   })
//   .then((res) => {
//     console.log(res);
//     return "Out of delevery";
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log("Error", error);
//   })
//   .finally(() => {
//     console.log("Thank You Using Zomato");
//   });

// __________________________________
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((resp) => {
//     return resp.json();
//     console.log(resp);
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((respond) => {
//     console.log(respond);
//     return respond.json();
//   })
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error, "error is com");
//   });

// Promise.resolve("A")
//   .then((res) => {
//     console.log(res);
//     return "B";
//   })
//   .finally(() => {
//     console.log("Finally");
//     return "C";
//   })
//   .then((res) => {
//     console.log(res);
//   });

// const user1 = fetch("https://jsonplaceholder.typicode.com/todos/1").then(
//   (res) => res.json(),
// );
// const user2 = fetch("https://jsonplaceholder.typicode.com/todos/2").then(
//   (res) => res.json(),
// );
// const user3 = fetch("https://jsonplaceholder.typicode.com/todos/3").then(
//   (res) => res.json(),
// );

// Promise.all([user1, user2, user3])
//   .then((users) => {
//     console.log("all user load", users);
//     users.forEach((user) => console.log(user.title));
//   })
//   .catch((error) => {
//     console.log("error", error);
//   });
// Multiple promises ko ek saath execute karta hai aur sabke complete hone ka wait karta hai.
// Result kis form me milta hai?
// Array of object

// async function fetchuserdata() {
//   console.log("fething user data");
//   try {
//     const respond = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     const user = await respond.json();
//     console.log("user load ", user);
//   } catch (error) {
//     console.log("fail to fetch", error);
//   } finally {
//     console.log("request complete");
//   }
// }
// fetchuserdata();

// Memoization Mastery: Optimize Repetitive Functions
// function slowAdd(a, b) {
//   for (let i = 0; i < 1e8; i++) {}
//   return a + b;
// }
// console.time("No memo");
// console.log(slowAdd(4, 5));
// console.timeEnd("No memo");

// function memoizationAdd() {
//   const cache = {};
//   return function (a, b) {      //Why do we use return function(){} instead of directly returning the result?
//     //Kyunki hume cache ko multiple function calls ke beech preserve rakhna hota hai. Inner function closure create karta hai,
//     // jiski wajah se cache memory me bani rehti hai aur memoization kaam karti hai.
//     //Yaha ek inner function return ho raha hai.
//     const key = `${a}_${b}`;
//     if (key in cache) {
//       //if(cache.hasOwnProperty(key)) use this also
//       // if(cache[key]) (ye fail ho jayega) if 2,-2 then result will be 0 then false toh phir se calculate krega then use if(key in cache)
//       return cache[key];
//     }
//     for (let i = 0; i < 1e8; i++) {}
//     const result = a + b;
//     cache[key] = result;
//     return result;
//   };
// }
// const add = memoizationAdd();
// console.time("Withing Memo");
// console.log(add(3, 2));
// console.timeEnd("Withing Memo");

// console.time("Withing Memo");
// console.log(add(3, 2));
// console.timeEnd("Withing Memo");

//Sabse pehle Memoization kya hota hai?

//Definition:
//Memoization ek optimization technique hai jisme pehle calculate hua result cache me store kar dete hain.
// Agar same input dobara aaye to calculation dobara nahi hoti, result cache se mil jata hai.
// in english
//Memoization is an optimization technique where the result of an expensive function call is stored in a cache.
// If the same inputs are provided again, the cached result is returned instead of recalculating it.

// function memoizationAdd(a, b) {
//   const cache = {};

//   const key = `${a}_${b}`;

//   if (key in cache) {
//     return cache[key];
//   }

//   const result = a + b;
//   cache[key] = result;

//   return result;
// }
// console.log(memoizationAdd(3, 2));
// console.log(memoizationAdd(3, 2));

//Closure is a feature in JavaScript where an inner function remembers and can access
// variables from its outer function even after the outer function has finished executing.
// Memoization uses closures to keep the cache alive between function calls.

// function outer() {
//   let count = 0;

//   return function () {
//     count++;
//     return count;
//   };
// }

// console.log(outer()()); // Har baar  Naya closure
// console.log(outer()());
// console.log(outer()());

//Closure tab tak zinda rehta hai jab tak us returned function ka reference kisi variable me save hota hai.
//const counter = outer(); // Yaha counter reference hold kar raha hai. Isliye closure bhi zinda hai.

// function outer() {
//   let count = 0;

//   return {
//     increment() {
//       count++;
//       console.log(count);
//     },
//     decrement() {
//       count--;
//       console.log(count);
//     },
//   };
// }

// const obj = outer();

// obj.increment();
// obj.increment();
// obj.decrement();
// obj.increment();
// How many closures are created here?  Sirf ek closure.
//Closure ka matlab hai: Inner function outer function ke variables ko yaad rakhta hai,
//  aur agar multiple inner functions same outer scope me bane hain,
// to wo sab usi same variable ko share karte hain.

// SPREAD — values nikal raha hai (expand)
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5]; // [1,2,3,4,5]

// REST — values collect kar raha hai
function sum(...numbers) {
  console.log(numbers); // [1,2,3,4,5] — sab collect ho gaye
}
sum(1, 2, 3, 4, 5);
