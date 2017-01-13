const R = require('ramda');

//----Creating our very own Functors -----

const StringFunctor = function ( value )  { this.chars = value.split(''); };	
StringFunctor.of = value => new StringFunctor(value);
//StrinFunctor.map :: f -> map( f, [string] ) -> [string]
StringFunctor.prototype.map = function (f) {
	
	let fromChar = char => String.fromCharCode(f(char.charCodeAt(0) ) );
	return StringFunctor.of( R.map( fromChar, this.chars ) );
};
const plus1 = value => value + 1;
const convertToNum = str => parseInt(str);
/*NOTE: console.log(StringFunctor.of('ABC').map( plus1 ) ); */

//NumberFunctor :: number  -> string -> Functor -> [string] -> [number];
const NumberFunctor = function ( value ) { this.numbers = value; };
NumberFunctor.of = value => new NumberFunctor( value );
NumberFunctor.prototype.map = function ( f ) {
      let newNumbers = R.map( convertToNum, this.numbers.toString().split('') ); 
      let finalNumbers = R.map( f, newNumbers );
      return NumberFunctor.of(finalNumbers);

};  

/* NOTE: console.log( NumberFunctor.of( 123 ).map( plus1 ) ); */

//Identity Functor 
const Identity = function(x) { this._value = x; };
Identity.of = x => new Identity(x);

//Maybe Functor 
const Maybe = function(x) { this._value = x; };
Maybe.of = x => new Maybe(x);
Maybe.prototype.isNothing = function () {
	return ( this._value === null || this._value === undefined );
};
Maybe.prototype.map = function(f) {
       return this.isNothing() ? Maybe.of(null) : Maybe.of( f(this._value) );
};

//Either Functor
const Either = R.curry( (f, g, e )=> {
	switch( e.constructor ) { 
            case Left:
	    return f(e._value);

	    case Right:
	    return g(e._value);	
	}
});

const Left = function(x) { this._value = x; };
const Right = function(x) { this._value = x; };

Left.of = x => new Left(x);
Right.of = x => new Right(x);

Left.prototype.map = f => this;
Right.prototype.map = f => Right.of( f(this._value) );

//incrementOrPrint : : value -> Either( Number,String )
const incrementOrPrint = x => (typeof x === "number") ?  Right.of( x ) : Left.of( `What did you just give me? A ${x} is not a number`);
//NOTE: Pass the increment... function any value to see Either at work. Also, you can run Either by it's self or console.log( Either ).
//The choice is yours.
//console.log( Either( console.log, plus1, incrementOrPrint(22) ) );

// Exercise 1
// ==========
// Use _.add(x,y) and _.map(f,x) to make a function that increments a value
// inside a functor.
const Adder = R.add(1);
const Functor = Identity.of( [2,3,4,5] ); 
const  ex1 = Functor =>  R.map( Adder, Functor._value );

//REVIEW: Will review this exercise at a later time. Feel free to run this line of code ---> console.log( ex1(Functor));


// Exercise 2
// ==========
// Use _.head to get the first element of the list.
var xs = Identity.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do']);

const ex2 = R.head(xs._value);
//NOTE: console.log(ex2);


// Exercise 3
// ==========
// Use safeProp and _.head to find the first initial of the user.
var safeProp = R.curry(function(x, o) {
	  return Maybe.of(o[x]);
});
//console.log( safeProp( 0, Functor._value ) );

var user = {
	  id: 2,
	  name: 'Albert',
	  active: false
};

const user_name = safeProp( "name", user )._value;

var ex3 = R.head(user_name);
//console.log(ex3);


// Exercise 4
// ==========
// Use Maybe to rewrite ex4 without an if statement.

var ex4 = function(n) {
	  if (n) {
	     return parseInt(n);
        }
};

//ex4_new : : f, string -> f(string) -> Maybe(_, number )
var ex4_new = ( f,n ) =>{

	return Maybe.of(n).map(f);	
};

//NOTE: console.log( ex4_new(parseInt, "3") );

// Exercise 6
// ==========
// Write a function that uses checkActive() and showWelcome() to grant access
// or return the error.

var showWelcome = R.compose(R.concat( "Welcome "), R.prop('name'));

var checkActive = function(user) {
	  return user.active ? Right.of(user) : Left.of('Your account is not active');
};

var ex6 = Either( Identity.of, showWelcome );
const user2 = {
	id: 2,
	name: "Darrell-I-C",
	active: true
};
//NOTE:console.log( ex6( checkActive(user2) ) ); switch from user2 -> user in order to see a non active account 

// Exercise 7
// ==========
// Write a validation function that checks for a length > 3. It should return
// Right(x) if it is greater than 3 and Left("You need > 3") otherwise.

var ex7 = function(x) {

	  return (x.length > 3 ) ?  Right.of( x ) : Left.of( "You need > 3" ); 
};
// NOTE: console.log( ex7("four") ); change the input's length in order to see a Left.of result.


// Exercise 8
// ==========
// Use ex7 above and Either as a functor to save the user if they are valid or
// return the error message string. Remember either's two arguments must return
// the same type.

var save = function(x) {
	  return (function() {
		   console.log('SAVED USER!');
		   return x + '-saved';
          })();
};

var ex8 = R.compose( Either( console.log, save ), ex7 );
//NOTE: console.log( ex8( "user" ) ); Change the length you pass through in order to recieve the error message.














