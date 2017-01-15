const R = require('ramda');
const { Identity, Maybe, Left, Right, Either } = require('./chp8.js');

// Exercise 1
// ==========
// Use safeProp and map/join or chain to safely get the street name when given
// a user.

var safeProp = R.curry(function(x, o) {
   return Maybe.of(o[x]);
});

const chain = R.curry ( ( f, m ) => m.map(f).join() );
var user = {
     id: 2,
     name: 'albert',
     address: {
         street: {
             number: 22,
             name: 'Walnut St',
         },
    },
 };

var ex1 = R.compose( chain( safeProp('name') ), chain(safeProp('street') ), safeProp('address') );
// NOTE: console.log( ex1( user ) );

//Other Examples may come at a later time.
