/* Create a mini app that handles multiple actions. One action being to map over an input of data and read each individual piece of data. This data should be able to be returned. Another action allows you to add a list of data that comes from a database. Another option to delete and update the database. The overall app can not be globally accessed. The app must be functionally structured.

//constraints
1. Must build large enough for different actions
2. A function must take input that can be mapped over and returned.
3. Can add data to a database.
4. Options to delete and update data from the database.
5. App cannot be access globally
6. Structure the app with functions

//Operations
1. Code will be larged and should be modulized.
2. There will be a series of objects and arrays that will hold data and add more functionality
3. Database will be JSON
4. Build each part and test one at a time

*/

function foo() {
    console.log( this.a );
}

var obj = {
    a: 2,
    foo: foo
};

obj.foo(); // 2
