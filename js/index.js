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
