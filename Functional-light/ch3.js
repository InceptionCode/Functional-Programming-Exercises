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

/* ---------------------------------------------------------------------------*/

/* Currying */
//Exercise 1: Create a Curry utility that takes a fn, arity ( the functions list of args ) as its parameters.
// Then return a IIFE that has the original fn previous argument(s) as its parameter.
// Inside this IIFE return the curried function that takes in the next set of arguments from the fn.
// The curried function will return a args var which equals the previous args concatinated by an next arg array.
// Finally to exscape and call the orignal fn with all its args create an if statement that checks,
// whether the args.length is greater than the passed arity.
// If not return the nextCurried function that holds an arg. End the IIFE by passing an empty array.

let curry = ( fn, arity = fn.length, nextCurried ) =>
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

function serverCall () {

  let serverNum =  Math.floor( Math.random() * ( 100 - 1 ) );
  return serverNum;

}

function grabNumber ( adder, serverCall ) {

  let serverNum = serverCall();
  return adder( serverNum );

}

grabNumber( adder, serverCall );

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

/* -------------------------------------------------------------------------- */

/* Point-Free Style */
//Exercise: 1 Create a function that doubles it's input value (number) and returns the result.
//Then map over the list of numbers in order to double each number.
// Use a mapper function in order to return the double function.
//Point-Free Implementation: Remove the mapper function and use the double function inside the map method.
// No arguments should be explicitly passed.

function double ( x ) {

  /* NOTE: console.log return statement. */
  return x * 2;

}

[ 1,2,3,4,5 ].map( function mapper ( v ) {

  return double ( v );

} );

//Point-Free no argument is being explicitly passed to func "double". Improved readability.
//Removes unecessary function "mapper".
[ 2,4,6,8,10 ].map( double );

//Exercise: 2 Create a function that prints a message based on how many "T"'s are present.
// There should be a function that takes the message.
// And another seperate function that checks the message for any "T"'s.
// There should be at least three "T"'s in order to print the message.

function showMessage ( msg ) {

  /* NOTE: console.log return statement */
  return msg;

}

function onlyPrintIf ( msg, turnIntoArray, isValid ) {

  let stringArray = turnIntoArray( msg );

  if ( isValid( msg, stringArray ) ) {

    return showMessage( msg );

  }

}

function turnIntoArray ( str ) {

  let stringArray = str.split( '' );
  return stringArray;

}

function checkForLetterT ( str, stringArray ) {

  let countOfLetter = stringArray.filter( str => {

    return !str.toLowerCase().indexOf( 't' );

  } ).length;

  if ( countOfLetter >= 3 ) {

    return true;

  } else {

    return false;

  }

}

//Each specific task is broken up into its own function that returns one result.
// The onlyPrintIf function allows the Point-Free style.
// By elimating the need to explicitly pass arguments to the other functions.

onlyPrintIf ( 'Test the value', turnIntoArray, checkForLetterT );
