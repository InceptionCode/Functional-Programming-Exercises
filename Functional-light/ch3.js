/** Some Now Some Later Exercises **/

/* Partials */
// Exercise 1: Create a partial function (utility) that takes an input of a function and list of initial arguments.
// Then returns an apply function with the input of the ...laterArguments.
// This function will return the fn() with a set of inputs which includes: the ...initialArguments, ...laterArguments.
// And finally returns the function with all it's required arguments.

function partial ( fn, ...initialArguments ) {

  return function partiallyApplied ( ...laterArguments ) {

    return fn( ...initialArguments, ...laterArguments );

  };

}

//test partial
function log ( name, job ) {

  /* NOTE: console.log this return value */

  return `${name}: is a ${job}`;

}

const darrellTheProgrammer = partial( log, 'Darrell' );
darrellTheProgrammer( 'Programmer' );

partial( log, 'James' )( 'instructor' );

//Exercise 2: Create a function that takes a list of numbers.
//Than returns the numbers multiplied by any number in a new array. Save the new array in a var.
// This new array must hold each value multiplied by to in order to be stored in the databse.

var numbers = [ 1,21,3,24,55 ];

function multiplier ( x, y ) {

  return x * y;

}

/* NOTE: console.log this variable */

let multipliedByTwo = numbers.map( partial( multiplier, 2 ) );


//Exercise 3: Let's say response has come from a server and holds some data.
// The data is either an list of names or another data structure.
// Create a function that will deconstruct all the names or deconstruct only the id properties out of an object.

function handleData ( randomNum, dataType ) {

  /* NOTE: console.log the return statement */
  return randomNum, dataType;

}
function sendNumberData ( handleData ) {

  setTimeout( () => {

    let randomNum =  Math.floor( Math.random() * ( 100 - 1 ) ),
     dataHandlerFunc = partial( handleData, randomNum );

    return sendDataType( randomNum, dataHandlerFunc );

  },500 );

}

function sendDataType ( randomNum, dataHandlerFunc ) {

  setTimeout ( () => {

    let dataType = [];
    if ( randomNum > 50 ) {

      dataType = [ 'kevin', 'ricky', 'martin' ];

    } else {

      dataType = {
        id: [ 1, 2, 3 ],
        names: [ 'kevin', 'ricky', 'martin' ]
      };

    }
    return dataHandlerFunc( dataType );

  }, 1500 );

}

sendNumberData( handleData );

/* Currying */
//Exercise 1: Create a Curry utility that takes a fn, arity ( the functions list of args ) as its parameters.
// Then return a IIFE that has the original fn previous argument(s) as its parameter.
// Inside this IIFE return the curried function that takes in the next set of arguments from the fn.
// The curried function will return a args var which equals the previous args concatinated by an next arg array.
// Finally to exscape and call the orignal fn with all its args create an if statement that checks,
// whether the args.length is greater than the passed arity.
// If not return the nextCurried function that holds an arg. End the IIFE by passing an empty array.

let curry =
  ( fn, arity = fn.length, nextCurried ) =>
   ( nextCurried = prevArgs =>
      nextArg => {

        var args = prevArgs.concat( [ nextArg ] );
        if ( args.length >= arity ) {

          return fn( ...args );

        } else {

          return nextCurried( args );

        }

      }
        )( [] );

//Exercise 2: create a function that takes two numbers and returns the sum.
// This function has to wait until the server returns the next number.
// Create a function that grabs the number from the server and finally calls the add function with all arguments.
function add ( x, y ) {

  /* NOTE: console.log the return statement */
  return x + y;

}

let adder = curry( add )( 10 );

function serverCall () { /* function in the server that creates a random number and returns it. */ }

function grabNumber ( adder /* serverNumber */ ) {

  let serverNum =  Math.floor( Math.random() * ( 100 - 1 ) );
  return adder( serverNum );

}

grabNumber( adder );

//Exercise 3: Create a function that grabs a list of names from the server.
// The list of names will be passed along to another function that maps over the names
//and returns a list of possible occupations.

function possibleOccupations ( name, occupation ) {

  /* NOTE: console.log the return statement */
  return `${name} could possibly be a ${occupation}`;

}

let curriedPossibleOccupations = curry( possibleOccupations );

setTimeout( () => {

  let occupation = '',
  serverName = 'steve',
  serverNum =  Math.floor( Math.random() * ( 50 - 1 ) ),
  recievedName = curriedPossibleOccupations( serverName );

  if ( serverNum >= 25 ) {

    occupation = 'Programmer';

  } else {

    occupation = 'Plumer';

  }

  return recievedName( occupation );

}, 1500 );
