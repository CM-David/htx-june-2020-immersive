// ***Write these functions with  Arrow Functions

// function mult(a, b) {
//     return a * b;
// }

// let mult = (a,b)=>a * b

// setTimeout(function () {
//     console.log(mult(5, 10));
// }, 1000)

// setTimeout() => console.log(mult(5, 10));

function addTwoNumbers(x, y){
    x = x || 0
    y = y || 0 // passing 0 unless specified when called
    return x + y
}

console.log(addTwoNumbers());


var addTwoNumbers= (x=0, y=0) => x + y