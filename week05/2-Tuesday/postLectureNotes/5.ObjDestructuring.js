// ***Object Destructuring
/* 
Declare mult() function that will multiply values of the x,y,z 
fields of the passed object
*/
// var obj = {
//     x: 5,
//     y: 20,
//     z: 3
// }

// var mult = obj => {
//     var {x, y, z} = obj

//     return x * y * z
// }

<<<<<<< HEAD
// console.log(mult(obj));
=======
// code here

// var {x, y, z} = obj; 

// var x = 5; 
// var y = 20; 
// var z = 3;

var mult = obj => {

    var {x, y, z} = obj;

    return x * y * z;

}

console.log(mult(obj));
>>>>>>> ef1f5b1ce4ec8b0c73043b86d03f120dddb08fd8
//300


/*
Create Person() function that will destructure each person object.
Sample result:
{n: "Mike", c: "Spain", a: 23, p:100}

If input object doesn't have postsQuantitiy field it should get default value 0.
*/


<<<<<<< HEAD
// var person1 = {
//     name: "Mike",
//     info: {
//         country: "Spain",
//         age: 23
//     },
//     postsQuantitiy: 100
// }

// var person2 = {
//     name: "Alice",
//     info: {
//         country: "Italy",
//         age: 25
//     }
// }
=======
var person1 = {
    name: "Mike",
    info: {
        country: "Spain",
        age: 23
    },
    postsQuantity: 100
}
>>>>>>> ef1f5b1ce4ec8b0c73043b86d03f120dddb08fd8




function test1(obj){
    return "hello"
}

<<<<<<< HEAD
let test2 = obj=>"hello"


console.log(test1(1))
=======



function person(obj){

    var {name: n, info: {}, postsQuantity: p}  = obj;

    console.log(n);

}

person(person1);
// console.log(person(person1))
// //{n: "Mike", c: "Spain", a: 23, p:100}

// console.log(person(person2))


>>>>>>> ef1f5b1ce4ec8b0c73043b86d03f120dddb08fd8
