/* global require: true */
const R =require( 'ramda' );

//Replicating the fun in currying.
const change = R.curry( ( arr, what, toThis )=> {

  let newArr = arr.map( item => {

    if ( item === what ) {

      item = toThis;

    }

    return item;

  } );

  return newArr;

} );
const singers = [ 'RiRi', 'Queen B', 'Breezy', 'Luther'];
//The magic comes later as of right now, NOTE: console.log this function call

change( singers, 'Luther', 'Stevie' );

const starSelect = ( name, arr ) => {

  let theStar = arr.filter( value => value == name ).pop();
  return theStar;

};
const newStar = name => name.charAt( 0 ).toUpperCase() + name.slice( 1 );
const replaceLuther = change( singers, starSelect( 'Luther', singers ) );
const Bobbie = replaceLuther( newStar( 'bobbie' ) );
const Whitney = replaceLuther( newStar( 'Whitney' ) );
//Here's the magic. NOTE console.log the variables below.
Bobbie;
Whitney;


/* That's nice but the funny thing is Ramda curries all of their functions by default.
So I came across the exercise in chapter 4 and figured why not give it a shot. */

// Exercise 1
//==============
// Refactor to remove all arguments by partially applying the function.

const lebron = ' Lebron is the GOAT ';
const splitSpaces = R.split( ' ' );
const words = splitSpaces( lebron );

//NOTE console.log this var statement.
words;

// Exercise 1a
//==============
// Use map to make a new words fn that works on an array of strings.
const theGreats = ['Michael Jordan is obviously the GOAT', 'Lebron is close', 'And it stops at Kobe'];
const splitTheGreats = sentence => splitSpaces( sentence );
const sentences = R.map( splitTheGreats );

//NOTE console.log this function call
sentences( theGreats );


// Exercise 2
//==============
// Refactor to remove all arguments by partially applying the functions.
const strArray = ['Who will be the mvp of the finals probably Kyrie Irving', 'The letter q and Q is here.'];
const pullQs = string => string.match( /q/i ) ;
const filterQs = R.filter( pullQs, strArray );
//NOTE console.log the variable filterQs.
filterQs;



// Exercise 3
//==============
// Use the helper function _keepHighest to refactor max to not reference any
// arguments.

// LEAVE BE:
var _keepHighest = function( x, y ) {

  return x >= y ? x : y;

};

// REFACTOR THIS ONE:
const max = R.reduce( _keepHighest, -Infinity );
const keepMaxNum = max( [ 10, 50 ] );
//NOTE console.log the variable below
 keepMaxNum;



// Bonus 1:
// ============
// Wrap array's slice to be functional and curried.
// //[1, 2, 3].slice(0, 2)
const slice = R.curry( ( arr, start, end ) => arr.slice( start, end ) );
const array = [ 1, 2, 3 ];
const slicingNum = slice( array );
const firstPosition = slicingNum( 0 );
const atPosition2 = firstPosition( 2 );
//NOTE console.log the variable below.
atPosition2;

// Bonus 2:
// ============
// Use slice to define a function "take" that takes n elements from the beginning of the string. Make it curried.
// // Result for "Something" with n=4 should be "Some"
const take = R.curry ( ( arr, n ) => slice( arr, 0, n ) );
const something = 'Something';
const takeSome = take( something );
const byFour = takeSome( 4 );
//NOTE console.log the variable below.
byFour;
