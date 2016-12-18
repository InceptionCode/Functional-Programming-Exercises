"use strict";
/* Create a function that reads how many Bs are in a word.
- Then create a function that takes two arguments and returns the character count for the second argument.
- The character counters do not have to be case sensitive.
- It can not use global variables and each function has to be purely independent.
*/

// //Constraints:
// 1. The 1st function can only read Bs
// 2. No global variables
// 3. Pure function
// 4. Second function has to have two parameters.
// //---------------------------------------------
// // Operations (1st Function)
// 1. Function can simple have one parameters
// 2. Are variables will be declared inside the function
// 3. Test the output with (Bbc) // -> 2
// test different methods involved with strings.
// 4. I may have to use .length or .indexOf() or .search() maybe both.
// 5. Use a conditional
// Loop through entire length
// 6. Console.log(results)
//
var counter_code = { //Namespacing 
  B_Counter: function (string) {
    let amount = 0;
    for(let loop = 0; loop < string.length; loop++) { // block scope let loop
      let letters = string.charAt(loop);
      let search = letters.toLowerCase().search('b');
      if(search === 0) {
        amount++;
      }
    }
    console.log(amount);
  },
  charCounter: function (string, char) {
    let amount = 0;
    for(let loop = 0; loop < string.length; loop++) {
      let letters = string.charAt(loop);
      let search = letters.toLowerCase().search(char);
      if(search === 0) {
        amount++;
      }
    }
    console.log(amount);
  }

}

//ES6 way
var { B_Counter, charCounter } = counter_code;

B_Counter('Bbc');
charCounter('jump man foreal, foreal, he the real deal', 'e');
//Is the same as
counter_code.B_Counter('Bbc');
counter_code.charCounter('jump man foreal, foreal, he the real deal', 'e');
