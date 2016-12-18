
//Prototype Section
//----------------------------
const Food1 ={

  init: function ( type ) {

    /* jshint  strict: false */
    this.type =type;

  },
  eat: function ( ) {

    /* jshint  strict: false */
    console.log( 'You ate a' +' ' +this.type );

  },
};

{

  const { init, eat, } =Food1;

  init( 'pizza' );
  eat();

}

const Waffle =Object.create( Food1 );

{

  const { init, eat, } =Waffle;
  init( 'waffle' );
  eat();

}

//Constructor Function Section
//--------------------------------------

class Food2 {
  constructor ( type ) {

    this.type =type;
    this.eat =() => {

        console.log( 'You ate a' +' ' +this.type );

      };

  }
  extra() {

    console.log( 'extra function' );

  }
}

function Food3 ( type ) {

  "use strict";
  this.type =type;
  this.eat =()=> {

        console.log( 'You ate a' +' ' +this.type );

      };

}

function Food4 ( type ) {

    this.type =type;

}

Food4.prototype.eat =function(){

    console.log( 'You ate a' +' ' +this.type );

}

{
    //Class ES6
    const Pancakes =new Food2( 'pancakes' );
    const { eat, } =Pancakes;
    eat();
    Pancakes.extra();

}

{
    //Constructor ES5
    const Chicken =new Food3( 'chicken' );
    const { eat, } =Chicken;
    eat();

}

{
    //Old School ES5
    const Turkey =new Food4( 'turkey' );
    Turkey.eat();

}

//Factor Function Section
//---------------------------------

const Food5 =( food )=> {

    const type =food;
    return {
        eat : ()=> console.log( 'You ate a' +' ' +type ),
    }

};

{

    const Cookies =Food5( 'cookies' );
    const { eat, } =Cookies;
    eat();

}
