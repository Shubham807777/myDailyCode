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
console.log(sum);

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
console.log(Math.max(10, 45, 23, 67, 12));

// 2. Round karo
console.log(Math.round(3.7));

// 3. Random 1 to 10
let random = Math.floor(Math.random() * 10) + 1;
console.log(random);

// Apna ek user object banao
// name, age, city, skills (array), isEmployed
// 1. skills mein "React" add karo
// 2. Object.keys() se saari keys print karo
// 3. Object.values() se saari values print karo
// 4. city delete karo object se

let user = {
  name: "shubham",
  city: "gurgaon",
  age: 27,
  skil: ["html", "css", "javascript"],
  isEmployed: true,
};
console.log(Object.keys(user));
console.log(Object.values(user));
user.skil.push("react");
console.log(user.skil);
delete user.city;
console.log(user);
