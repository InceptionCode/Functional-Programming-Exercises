/* Create a function that handles if a number is even or odd. The function obviously takes one argument.
The function must also be able to handle - integers as well. No global variables are allowed.
One input and one output such as true or false. */
//
// //Constraints
// 1. Function only reads if # is odd or even
// 2. Negative integers can not break the function.
// 3. Function must return true or false.
// 4. No Global variables
//
// //Operations
// 1. I must use an if statement
// 2. I may have to use the % operator with the boolean
// 3. Find away to turn the number into an absolute value. So the function won't break on - integers.
// 4. Steps to completion:
//     - Find a way to make integers absolute first. //Math.abs()
//     - console.log a simple if statement that reads an even numbers remainder and odd numbers remainder

function isEven(num) {
  num = Math.abs(num);
  if(num % 2 === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

isEven(-15);
