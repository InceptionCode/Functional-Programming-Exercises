/* Chapter 4: Composing Functions */

//In this chapter a great imagery that involved a factory was uesed.
// This entire practice file will involve the different parts (sectios) of the candy factory.

/* Old, Slow, Assembly Line */

//The parts needed to make and finally wrap the candy are all done on a moving conveyor belt.


//This function creates the array [box] of grouped candy.
const candyBatch1 = 'Make this initial batch of candy please';

function coolingChocolate ( candyStr ) {

  return String( candyStr )
         .toLowerCase()
         .split( ' ' );

}

//This function creates the unique pieces of candy.
function cuttingCandy ( candyArray ) {

  let uniquePackage = [];
  candyArray.forEach( index => {

      if ( uniquePackage.indexOf( index ) === -1 ) {

        uniquePackage.push( index );

      }

    } );
  /* NOTE: Change this return to a console.log */
  return uniquePackage;

}

cuttingCandy( coolingChocolate( candyBatch1 ) );

//Hooking the Machines up together.

const candyBatch2 = 'This batch should be really really good and quick to make';

function wrappedCandy ( candyStr ) {

  /* NOTE: Change this return statement to a console.log */
  return cuttingCandy( coolingChocolate( candyStr ) );

}

wrappedCandy( candyBatch2 );

//Building the 'Machine' that makes candy machines.

const candyBatch3 = 'This candy is even better because of the new machine making machine';
function composing ( fn2, fn1 ) {

  return function composed ( mainValue ) {

    /* NOTE: Console.log the return statement */
    return fn2( fn1( mainValue ) );

  };

}

const composedMachine = composing( cuttingCandy, coolingChocolate );

composedMachine( candyBatch3 );
