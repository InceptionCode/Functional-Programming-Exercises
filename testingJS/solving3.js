/* Create a function that handles if a number is even or odd. The function obviously takes one argument.
The function must also be able to handle - integers as well. No global variables are allowed.
One input and one output such as true or false.
The numbers have to be stored in a seperate JSON file in order to properly run a database.
For testing purposes print the first line of the database */

//Constraints
// 1. The first list of constraits from problem 2 appear here.
// 2. So the inital part is the same.
// 3. Now we have to figure out how return the even numbers to the even section of the database
// 4. Return odd numbers to the odd section of the database
// 5. Finally console.log the first line of even numbers and odd numbers.
//
// //Operations
// 1. Import the solved problem earlier
// 2. create second if statement that pushes number on to right array in the database.
// 3. Simple console.log the parts of the database 1st. Just to see how to add a number to the array.
// 4.

(function Database () {
  const database =
  {
    "Even" : [],
    "Odd": []
  };

  function isEven(num,{ Even, Odd }) {
    num = Math.abs(num);
    if (num % 2 === 0) {
      Even.push(num);
    } else {
      Odd.push(num);
    }
  }
  isEven(25, database);
  console.log(database.Even)
  console.log(database.Odd)
})();
