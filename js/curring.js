/**
 *? function cutting basics!
 *! Curry means number of araguments is equal to number of function !
 **/

/*
function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(sum(1)(2)(3));
*/

/**
 *? write a infinite curring
 ** eg: sum(1)(2)...(n) , don't fotget to agg one extra parentasis for last function call
 *! we will use recursion for this
 **/

// function sum(a) {
//   return function (b) {
//     if (b) return sum(a + b);
//     return a;
//   };
// }
// console.log(sum(2)(4)(5)(7)());

/**
 * * convert a normal function into curried function;
 **/

function curry(func) {
  return function curriedFunc(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...next) {
        return curriedFunc(...args, ...next);
      };
    }
  };
}

function sum(a, b, c, d) {
  return a + b + c + d;
}

const totalSum = curry(sum);

console.log(totalSum(1)(2)(3)(4));
