/*The significance of pure functions can't be stressed enough.
Here I will create two short examples of impure functions and pure functions.
In each example I will showcase the error and issues that can occur when dealing with impure functions. */

var canMutate =10;

const doStuff =()=> {

  if ( canMutate === 10 ) {

    return 'The state is in good condition';

  }

};

console.log( doStuff() );

// And this is where the damage can be done later in the code base....
const createSomething =()=> canMutate =[ 10 ];
const newAssignment = array => array.push( 20 );

newAssignment( createSomething() );

//We have to do some stuff again and we expect the same outcome as earlier because we didn't change the number
console.log( doStuff() );
//Or at least we didn't think we did...
// ->Opps canMutate = [ 10, 20 ]


//--------The Pure Fix ----->
const unMutatable =10;

const newDoStuff =number => {

  if ( number === 10 ) {

    return 'The state is in good condition';

  }

};

console.log(newDoStuff( unMutatable ));

const newCreation =number => {

  const numberArray = [ number ];
  return numberArray;

};
const finalAssignment =array => {

  const newArray = array.push( 20 );
  return newArray;

};
finalAssignment( newCreation( unMutatable ) );

//Now we check the state of the app again.....
console.log(newDoStuff( unMutatable ));
//I believe the state of the app is still in good condition.


//TODO: Other example
