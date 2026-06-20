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

function bankAccount() {
  let balance = 1000;
  return {
    deposite: function (amount) {
      balance += amount;
      console.log("Deposit = ", amount, "now blance =", balance);
    },
    withdraw: function (amount) {
      balance -= amount;
      console.log("withdraw = ", amount, "now blance =", balance);
    },

    blanceChaeck: function () {
      console.log("current balance = ", balance);
    },
  };
}

const myaccount = bankAccount();
myaccount.deposite(200);
myaccount.withdraw(10);
myaccount.blanceChaeck();
