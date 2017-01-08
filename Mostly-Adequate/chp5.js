/* global require: true */
const R =require( 'ramda' );
const { change } = require( './chp4.js' );
/* The shout example was perfect yet simple to understand how compose works and is effective.
so I decided to recreate my own composed set of functions that turn a string into something amazing. */

const LebronJames = ' I think I am no doubt the MVP this year ';
const toUpper = str => R.toUpper( str );
const isMVP = str => ( str.search( 'MVP' ) !== -1 ) ? str : false;
const isTrueMVP = str => str = ( str ) ? str = 'He\'s the MVP ' : str = 'Not the MVP';
const composeStringFunctions = R.compose( isTrueMVP, isMVP, toUpper );//By the way this is pointfree
const pipeStringFunctions = R.pipe( toUpper, isMVP, isTrueMVP );//By the way this is pointfree as well
//NOTE: compose function reads right to left and pipe reads left to right. Try console.logging both func calls

composeStringFunctions( LebronJames );
pipeStringFunctions( LebronJames );

//You could always right out these curried functions like normal
const splitTheMVP = R.split( ' ' , 'LebronJames');
const RussellWestbrook = change( splitTheMVP, 'LebronJames', 'RussellWestbrook' );
//NOTE console.log(RussellWestbrook)

//-------The books exercises-----------

// Example Data
var CARS = [{
  name: 'Ferrari FF',
  horsepower: 660,
  dollar_value: 700000,
  in_stock: true,
}, {
  name: 'Spyker C12 Zagato',
  horsepower: 650,
  dollar_value: 648000,
  in_stock: false,
}, {
  name: 'Jaguar XKR-S',
  horsepower: 550,
  dollar_value: 132000,
  in_stock: false,
}, {
  name: 'Audi R8',
  horsepower: 525,
  dollar_value: 114200,
  in_stock: false,
}, {
  name: 'Aston Martin One-77',
  horsepower: 750,
  dollar_value: 1850000,
  in_stock: true,
}, {
  name: 'Pagani Huayra',
  horsepower: 700,
  dollar_value: 1300000,
  in_stock: false,
}];

// Exercise 1:
// ============
// Use _.compose() to rewrite the function below. Hint: _.prop() is curried.
var isLastInStock = function(cars) {
  var last_car = _.last(cars);
  return _.prop('in_stock', last_car);
};

// Exercise 2:
// ============
// Use _.compose(), _.prop() and _.head() to retrieve the name of the first car.
var nameOfFirstCar = undefined;


// Exercise 3:
// ============
// Use the helper function _average to refactor averageDollarValue as a composition.
var _average = function(xs) {
  return _.reduce(_.add, 0, xs) / xs.length;
}; // <- leave be

var averageDollarValue = function(cars) {
  var dollar_values = _.map(function(c) {
    return c.dollar_value;
  }, cars);
  return _average(dollar_values);
};


// Exercise 4:
// ============
// Write a function: sanitizeNames() using compose that returns a list of lowercase and underscored car's names: e.g: sanitizeNames([{name: 'Ferrari FF', horsepower: 660, dollar_value: 700000, in_stock: true}]) //=> ['ferrari_ff'].

var _underscore = _.replace(/\W+/g, '_'); //<-- leave this alone and use to sanitize

var sanitizeNames = undefined;

// Bonus 2:
// ============
// Refactor to pointfree. Hint: you can use _.flip().

var fastestCar = function(cars) {
  var sorted = _.sortBy(function(car) {
    return car.horsepower;
  }, cars);
  var fastest = _.last(sorted);
  return fastest.name + ' is the fastest';
};
