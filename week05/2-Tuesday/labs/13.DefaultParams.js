/*

Check the presence of the function parameters 

Throw Error when function square() is called without arguments.

Create new function and use it as a default parameter. 

*/

var square = (a=0) => code 7*
a * a 

square(10)
// 100 

square();
//BEFORE: NaN
//AFTER: Uncaught Error: Function square requrires an agrument

