const R = require('ramda');

//----Creating our very own Functors -----
//StrinFunctor :: ( string, f ) -> f([string]) -> [string] 
const StringFunctor = ( value, fn ) => {
	let chars = value.split("");
	let fromChar = char => String.fromCharCode(fn(char.charCodeAt(0) ) );
	return R.map( fromChar, chars );
};	
const plus1 = value => value + 1;
const convertToNum = str => parseInt(str);
//NOTE: console.log(StringFunctor("ABC",plus1));

//NumberFunctor :: number  -> string -> Functor -> [string] -> [number];
const NumberFunctor = value => {
      let numbers = value.toString();
      let incrementedNumbers = StringFunctor( numbers, plus1 );
      return R.map( convertToNum, incrementedNumbers );
};      

//NOTE: console.log(NumberFunctor(123) );

//Identity Functor 
const Identity = function(x) { this._value = x; };
Identity.of = x => new Identity(x);

//Maybe Functor 
const Maybe = function(x) { this._value = x; };
Maybe.of = x => new Maybe(x);
Maybe.prototype.isNothing = () => ( this._value === null || this._value === undefined );
Maybe.prototype.map = f => ( this.isNothing() ) ? Maybe.of(null) : Maybe.of( f(this._value) );

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

//incrementOrPrint : : value -> Either( String, Number )
const incrementOrPrint = x => (typeof x === "number") ?  Right.of( x ) : Left.of( `What did you just give me? A ${x} is not a number`);
//NOTE: Pass the increment... function any value to see Either at work. Also, you can run Either by it's self or console.log( Either ).
//The choice is yours.
//console.log( Either( console.log, NumberFunctor, incrementOrPrint(22) ) );

// Exercise 1
// ==========
// Use _.add(x,y) and _.map(f,x) to make a function that increments a value
// inside a functor.
const Adder = R.add(1);
const Functor = Identity.of( [2,3,4,5] ); 
const  ex1 = Functor =>  R.map( Adder, Functor._value );

//REVIEW: Will review this exercise at a later time. Feel free to run this line of code ---> console.log( ex1(Functor));

//TODO
// Exercise 2
// ==========
// Use _.head to get the first element of the list.
var xs = Identity.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do']);

var ex2 = undefined;



// Exercise 3
// ==========
// Use safeProp and _.head to find the first initial of the user.
var safeProp = _.curry(function(x, o) {
	  return Maybe.of(o[x]);
});

var user = {
	  id: 2,
	    name: 'Albert',
};

var ex3 = undefined;


// Exercise 4
// ==========
// Use Maybe to rewrite ex4 without an if statement.

var ex4 = function(n) {
	  if (n) {
		      return parseInt(n);
		        }
};

var ex4 = undefined;



// Exercise 5
// ==========
// Write a function that will getPost then toUpperCase the post's title.

// getPost :: Int -> Future({id: Int, title: String})
var getPost = function(i) {
	  return new Task(function(rej, res) {
		      setTimeout(function() {
			            res({
					            id: i,
						            title: 'Love them futures',
							          });
				        }, 300);
		        });
};

var ex5 = undefined;



// Exercise 6
// ==========
// Write a function that uses checkActive() and showWelcome() to grant access
// or return the error.

var showWelcome = _.compose(_.concat( "Welcome "), _.prop('name'));

var checkActive = function(user) {
	  return user.active ? Right.of(user) : Left.of('Your account is not active');
};

var ex6 = undefined;



// Exercise 7
// ==========
// Write a validation function that checks for a length > 3. It should return
// Right(x) if it is greater than 3 and Left("You need > 3") otherwise.

var ex7 = function(x) {
	  return undefined; // <--- write me. (don't be pointfree)
};



// Exercise 8
// ==========
// Use ex7 above and Either as a functor to save the user if they are valid or
// return the error message string. Remember either's two arguments must return
// the same type.

var save = function(x) {
	  return new IO(function() {
		      console.log('SAVED USER!');
		          return x + '-saved';
			    });
};

var ex8 = undefined;















