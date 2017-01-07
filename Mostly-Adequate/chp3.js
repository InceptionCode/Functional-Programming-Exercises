/* The significance of pure functions can't be stressed enough.
Here I will create two short examples of impure functions and pure functions.
In each example I will showcase the error and issues that can occur when dealing with impure functions. */

var canMutate = 10;

const doStuff = ()=> {

  if ( canMutate === 10 ) {

    return 'The state is in good condition';

  }

};

//console.log this function call
doStuff();

// And this is where the damage can be done later in the code base....
const createSomething = ()=> canMutate =[ 10 ];
const newAssignment = array => array.push( 20 );

newAssignment( createSomething() );

//We have to do some stuff again and we expect the same outcome as earlier because we didn't change the number
//console.log this function call
doStuff();
//Or at least we didn't think we did...
// ->Opps canMutate = [ 10, 20 ]


//--------The Pure Fix ----->
const unMutatable =10;
const newDoStuff = number => {

  if ( number === 10 ) {

    return 'The state is in good condition';

  }

};
//NOTE: console.log this function call

newDoStuff( unMutatable );

const newCreation = number => {

  const numberArray = [ number ];
  return numberArray;

};
const finalAssignment = array => {

  const newArray = array.push( 20 );
  return newArray;

};
finalAssignment( newCreation( unMutatable ) );

//Now we check the state of the app again.....
//NOTE: console.log this function call
newDoStuff( unMutatable );
//I believe the state of the app is still in good condition.


//---------Next Example -----------------
//Input to Output

var scaryObj = {
  group1: [ 'Jane', 'Kevin', 'Ronald' ],
  group2: [ 'Raven', 'Richard', 'Bryan' ]
};

const seperateGroups = ()=> {

  for( let prop in scaryObj ) {

    if ( prop === 'group1' ) {

      scaryObj = scaryObj[prop];

    } else if ( prop === 'group2' ) {

      scaryObj = scaryObj[prop];

    }

  }

};
seperateGroups();

const selectLastName = array => {

  let lastName = array[ array.length -1 ];
  return lastName;

};
selectLastName( seperateGroups );
//Wait how is array.pop() not a function I am sure it is. How am I getting this error.
//Because functions aren't pure and data is being mutated badly.

//NOTE: Before moving on comment out the seperateGroups call on line 93 and selectLastName call on line 96.
//-----Pure functions to the rescue-------
const seperatingProps = ( obj, propName )=> {
  //I know I can just deconstruct scaryObj but just go with it.
  let prop = obj[propName];
  return prop;

};
let group1 = seperatingProps( scaryObj, 'group1' );
let group2 = seperatingProps( scaryObj, 'group2' );

//NOTE: console.log the function calls below
selectLastName(group1);
selectLastName(group2);
