/* Find all the small letters inside an array and return them in a new array.
You can use a function if necessary but it has to be pure.  */

//Step 1: The Plan
//Constraints
//   1. Finding small letters.
//   2. The small letters are inside an array.
//   3. Have to return new array.
//   4. You cant modify or mutate the original array.
//   5. Function has to be pure.
//
// //Operations
//   1. Look up all methods or functions for strings. (match()/ substr())
//   2. Loop up how to test for capitalization in a regular expression. return (/[a-z]/.test(str));
//   2. With that info form a plan on how to handle the strings.
//     - Use a conditional to check if a match for any lowercase letters popup.
//     - The result should print a letter.
//     - Loop through all letters individual.
//   3. Finally console.log(the results of reading just an individual string)
//   4. Make all the strings UPPERCASE and see how the system processed that.
//   5. Make all strings lowercase and see how the system processed that.
//   -----------------------------------------------------------------------
//   1. Dont use a loop use functional methods only. Because we arent mutating the array.
//   2. Stay declaritive avoid imperative
//   3. Read each sentence individual inside the array.
//   4. Probably should incoporate a conditional test.
//   5. start by handingly one element inside an array 1st
//   6. Develop a function that does the same action for that array.
//   7. Then I would attempt to incoporate more sentences.
//   8. Form another step to take.
//   ----------------------------------------------------------------------------------

var string = 'The jump man IS SOMETHING REAL';

function testString (str) {
  let new_str = [];
  for(i = 0; i < str.length; i++) {
    if(str.charAt(i).match(/[a-z]/) !== null) {
      new_str.push(str.charAt(i).match(/[a-z]/).input);
    }
  }
  return new_str;
}
console.log(testString('KEvin looka REtarteD he canT spell'));
