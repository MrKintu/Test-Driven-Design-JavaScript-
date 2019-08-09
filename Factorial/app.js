/*
Copyright ©. All rights reserved.
Created on Fri Aug 09 2019
All this code and likeness belong to the author as addressed.
Copyright © 2019 Kintu Declan Trevor
Thank You.
*/

const factorial = number => {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
};

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(10));
console.log(factorial(69));

module.exports = factorial;
