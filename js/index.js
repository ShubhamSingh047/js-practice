// -------------------- Arrays -----------------
/* 
const users = [
  { id: 3, name: "shubham", isActive: true, age: 27 },
  { id: 1, name: "Jack", isActive: true, age: 29 },
  { id: 2, name: "John", isActive: true, age: 19 },
  { id: 3, name: "Mike", isActive: true, age: 22 },
];

const test = users
  .sort((a, b) => a.age - b.age)
  .filter((data) => data.isActive)
  .map(({ name }) => name);

// users.map((data) => {
//   data.isActive && test.push(data.name);
// });

console.log(test);
*/

// *------------------ Closures ------------------

/*
const globalfunc = () => {
  let count = 0;
  return {
    increment: (val = 1) => {
      count += val;
    },
    getCount: () => {
      return count;
    },
  };
};

const counter = globalfunc();
counter.getCount();
console.log(counter);
counter.increment();
console.log(counter.getCount());
*/

// *--------------------------- Curring -------------------
// const multiply = (a) => (b) => a * b;
// console.log(multiply(2)(3));

//* ------check if user with such name exist------------
/*
const users = [
  { id: 1, name: "Jack", isActive: true },
  { id: 2, name: "John", isActive: true },
  { id: 3, name: "Mike", isActive: false },
 { id: 3, name: "shubham", isActive: false },
];

const userExist = (name, users) => {
  // return !!users.find((data) => data.name === name);
  return users.some((data) => data.name === name);
};

const result = userExist("shubham", users);
console.log(result);
*/

//*-------Remove all the dublicate from array-------
/*
const removDublicate = (arr) => {
  return [...new Set(arr)];
};
const arr = [1, 1, 2, 3, 2, 3];
console.log(removDublicate(arr));
*/

//*---------------------- Sorting Array -------------------
/*
const arr = [3, 2, 1, 4];
const res = arr.slice().sort((a, b) => a - b);
console.log(res, arr);

const books = [
  { name: "Harry Potter", author: "Joanne Rowling" },
  { name: "Warcross", author: "Marie Lu" },
  { name: "THe Hunger Games", author: "Suzanne Collins" },
];

books.sort((book1, book2) => {
  const book1LastName = book1.author.split(" ")[1];
  const book2LastName = book2.author.split(" ")[1];
  return book2LastName.localeCompare(book1LastName);
});

console.log(books);
*/

//*-------- Array range -----------
// Q1: Write a function which implements a range
// console.log(range(1, 50)) // [1,2,3,4,5...,50]
/*
const range = (start, end) => {
  return [
    ...Array(end)
      .keys()
      .map((el) => el + start),
  ];
};

console.log(range(1, 50));
*/

//*---------shuffle Array----------
// const arr = [1, 2, 3, 4, 5];

// const shuffle = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [arr[j], arr[i]] = [arr[i], arr[j]];
//   }
//   return arr;
// };
// console.log(arr, "before shuffle");
// console.log(shuffle(arr));

// Max occurance of min number in array.
/*
const test = [1, 2, 3, 4, 5, 1];
const min = Math.min(...test);
const minArr = test.filter((el) => el === min);
console.log(minArr.length);
*/

//*----------Call, Apply, Bind----------

// const obj = {
//   name: "shubham",
// };

// function sayhello(age) {
//   return this.name + " hello you age is " + age;
// }
// let result = sayhello.call(obj, 27);
// console.log(result);

// *Now create Polyfill for call()

// Function.prototype.myCall = function (context = {}, ...arg) {
//   if (typeof this != "function") {
//     throw new Error(" this type is not valid ! ");
//   }
//   context.fn = this;
//   const result = context.fn(...arg);
//   delete context;
//   return result;
// };

// result = sayhello.myCall(obj, 36);
// console.log(result);

// *---------------     apply()

// Function.prototype.myApply = function (context = {}, args = []) {
//   if (typeof this != "function") {
//     throw new Error("not a valid function type");
//   }
//   if (!Array.isArray(args)) {
//     throw new Error("Please provide arument in array");
//   }
//   context.fn = this;
//   const result = context.fn(...args);
//   delete context;
//   return result;
// };

// const result2 = sayhello.myApply(obj, [27]);
// console.log(result2, "result2");

// *---------------- Bind()
// Function.prototype.myApply = function (context = {}, ...args) {
//   if (typeof this != "function") {
//     throw new Error("not bound to function");
//   }
//   context.fun = this;
//   return function (...newArgs) {
//     const result = context.fun(...args, ...newArgs);
//     delete context;
//     return result;
//   };
// };

// const result3 = sayhello.bind(obj,27);
// console.log(result3());

//-----------------Object Deep Copy----------

// const obj = {
//   name: "shubahm",
//   age: 27,
// };

// const string = JSON.stringify(obj);
// const result = JSON.parse(string);
// obj.fu = 12;
// console.log(obj);
// console.log(result);

// ------------ Variable and hosting -------

// console.log(b, "b");
// console.log(a, "a");
// const a = 1;
// var b = 2;

// * --- filter/map/reduce --

// const arr = [1, 2, 3, 4, 5];

// if no intial value is provided then it take it inital value by defult as first element of arr;
// const result = arr.reduce((acc, curr, i, arr) => {
//   return acc + curr;
// },10);

// console.log(result);

// * ------- custome map
// Array.prototype.myMap = function (cb) {
//   const newArr = [];
//   if (!Array.isArray(this)) {
//     throw new Error(`${this} is not a valid array`);
//   }
//   for (let i = 0; i < this.length; i++) {
//     newArr.push(cb(this[i], i, this));
//   }
//   return newArr;
// };
// let resMap = arr.myMap((data, i, arr) => data + 1);
// console.log(resMap);

// * ------- custome filter
// Array.prototype.myFilter = function (cb) {
//   const temp = [];
//   if (!Array.isArray(this)) {
//     throw new Error(`${this} is not a valid array`);
//   }
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i, this)) {
//       temp.push(this[i]);
//     }
//   }
//   return temp;
// };
// const resFilter = arr.myFilter((data) => data > 1);
// console.log(resFilter);

// * ---------- custome Reduce
// Array.prototype.myReduce = function (cb, intialvalue) {
//   let temp = intialvalue;
//   if (!Array.isArray(this)) {
//     throw new Error(`${this} is not a valid array`);
//   }
//   for (let i = 0; i < this.length; i++) {
//     temp = temp ? cb(temp, this[i], i, arr) : this[i];
//   }
//   return temp;
// };
// const resReduce = arr.myReduce((acc, curr, i, arr) => {
//   return acc + curr;
// }, 20);
// console.log(resReduce);

//return the name of student who score more then 60 after addition of grace marks 60;
// let students = [
//   { name: "Piyush", rollNumber: 31, marks: 80 },
//   { name: "Jenny", rollNumber: 15, marks: 69 },
//   { name: "Kaushal", rollNumber: 16, marks: 35 },
//   { name: "Dilpreet", rollNumber: 7, marks: 55 },
// ];

// const result = students
//   .map((stu) => {
//     if (stu.marks < 60) {
//       stu.marks += 20;
//     }
//     return stu;
//   })
//   .filter((stu) => stu.marks > 60)
//   //here giving intial value as 0 is cpmpusory other wise it will take arr[0] which an object
//   .reduce((acc, curr) => acc + curr.marks, 0);

// console.log(result, "result");

// -------------------- Functions / Closures ---------------------

// (function test() {
//   const test = arguments[0];
//   return function sum() {
//     const test1 = arguments[0];
//     return function sun3() {
//       console.log(test + test1 + arguments[0]);
//     };
//   };
// })(1)(2)(3);

/* 
* write function in torder to satify below contions

const resultSum=SumFunction(6)
resultSum(10) //16
resultSum(20) //26
*/

// function SumFunction(sum1) {
//   return function (sum2) {
//     console.log(sum1 + sum2);
//   };
// }

// const resultSum = SumFunction(6);
// resultSum(10); //16
// resultSum(20); //26
/** 
 
* ? Private module

**/

// const Module = (function () {
//   function globalFunc() {
//     console.log("Global");
//   }

//   return {
//     publicModule: function () {
//       console.log("Public");
//     },
//     privateModule: function () {
//       console.log("private");
//     },
//   };
// })();

// Module.publicModule();
// Module.privateModule();

// Creating closures to run code only once
// let sub = "subscibed";
// function CallOnce() {
//   let called = 0;
//   return function () {
//     if (called === 0) {
//       console.log(sub, " ", ++called);
//     } else {
//       console.log("already subscriber");
//     }
//   };
// }

// const Subcribe = CallOnce();
// Subcribe();
// Subcribe();
// Subcribe();

/*
*Imporve the performace of given function ??

function find(index) {
  const a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i + 1;
  }
  console.log(a[index]);
}
}
*/

/* 

*how to improve speed of out function which has a very long network call

*/

// function find() {
//   const a = [];
//   for (let i = 0; i < 1000000; i++) {
//     a[i] = i + 1;
//   }
//   return function (index) {
//     console.log(a[index]);
//   };
// }

// const result = find();
// result(4000);

/** 
 
 *! Create a cutome Funcion which will be only called once pollyphill!
* ? doubt ?
 **/

// function once(func, context) {
//   let ran;
//   return function () {
//     if (func) {
//       ran = func.apply(context || this, arguments);
//       func = null;
//     }
//     return ran;
//   };
// }

// const hello = once((a, b) => console.log("Hello", a, b));

// hello(1,2);

/**
 * ?logic questions
 **/

const items = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 3, name: "C" },
  { id: 1, name: "D" },
  { id: 3, name: "F" },
  { id: 1, name: "A" },
  { id: 3, name: "C" },
];

// expected result:
// [
// { id: 1, names:['a', 'd']},
// { id: 2, names: ['b']},
// { id: 3, names:['c', 'f']}
// ]
// const result = items.reduce((acc, curr) => {
//   const existingItem = acc.find((item) => item.id === curr.id);
//   const name = curr.name.toLowerCase(); // Convert name to lowercase

//   if (existingItem) {
//     // If item with the same id exists, add name if it's not already in the array
//     if (!existingItem.names.includes(name)) {
//       existingItem.names.push(name);
//     }
//   } else {
//     // If item with id doesn't exist, create a new object
//     acc.push({ id: curr.id, names: [name] });
//   }

//   return acc;
// }, []);

// console.log(result);

// function rollCall(...args) {
//   let count = 0;
//   return function () {
//     if (args.length > count) {
//       console.log(args[count]);
//       count++;
//     } else {
//       console.log("Everyone accounted for");
//     }
//   };
// }
// const arr = ["shubham", "rahul", "akash"];
// let result = rollCall(...arr);
// result();
// result();
// result();
// result();

/**
 * ! Memoize a function so it performace can be increase;
 **/

// function Memoize(fun, context) {
//   const temp = {};
//   return function (...args) {
//     let argsCatche = JSON.stringify(args);
//     if (!temp[argsCatche]) {
//       temp[argsCatche] = fun.call(context || this, ...args);
//     }
//     return temp[argsCatche];
//   };
// }

// function TimeTaken(num1, num2) {
//   for (let i = 1; i < 1000000; i++) {}
//   return num1 * num2;
// }

// const optimumRes = Memoize(TimeTaken);
// console.time("first Call");
// console.log(optimumRes(10983, 12334));
// console.timeEnd("first Call");

// console.time("second Call"); // Corrected label
// console.log(optimumRes(10983, 12334));
// console.timeEnd("second Call"); // Corrected label

/**
 * *set timeOut Questions!
 * ? Guess OutPut !
 * function a(){
 * for(var i=0; i<3; i++){
 * setTimeout(function log(){
 *  console.log(i);
 * },i*1000)
 * }
 * }
 * TODO:this will give 3,3,3 times !
 *
 *
 * ? Guess OutPut !
 * function a(){
 * for(let i=0; i<3; i++){
 * setTimeout(function log(){
 *  console.log(i);
 * },i*1000)
 * }
 * }
 * TODO:this will give 0,1,2 becuase let create its own block every time !
 * ? using var how can we achive the 0,1,2 as an answer
 *
 * functiona(){
  * for(var i=0; i<3; i++){
    * function(i){
    *  setTimeout(()=>log(i),i*1000);
    * }
  * }
 * }
 **/
