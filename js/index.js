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

// ------------------ Closures ------------------

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

// --------------------------- Curring -------------------
// const multiply = (a) => (b) => a * b;
// console.log(multiply(2)(3));

// ------check if user with such name exist------------
/*
const users = [
  { id: 1, name: "Jack", isActive: true },
  { id: 2, name: "John", isActive: true },
  { id: 3, name: "Mike", isActive: false },
  // { id: 3, name: "shubham", isActive: false },
];

const userExist = (name, users) => {
  // return !!users.find((data) => data.name === name);
  return users.some((data) => data.name === name);
};

const result = userExist("shubham", users);
console.log(result);
*/

//-------Remove all the dublicate from array-------
/*
const removDublicate = (arr) => {
  return [...new Set(arr)];
};
const arr = [1, 1, 2, 3, 2, 3];
console.log(removDublicate(arr));
*/

//---------------------- Sorting Array -------------------
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

//-------- Array range -----------
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

//---------shuffle Array----------
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

//----------Call, Apply, Bind----------

// const obj = {
//   name: "shubham",
// };

// function sayhello(age) {
//   return this.name + " hello you age is " + age;
// }
// let result = sayhello.call(obj, 27);
// console.log(result);

//Now create Polyfill for call()

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

// //---------------     apply()

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

// //---------------- Bind()
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

// --- filter/map/reduce --

const arr = [1, 2, 3, 4, 5];

// if no value id provided then it take it inital value by defult as first element of arr; 
const result = arr.reduce((acc, curr, i, arr) => {
  return acc + curr;
},10);

console.log(result);
