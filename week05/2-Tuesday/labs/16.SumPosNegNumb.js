
/*
Create a function sumPlusMinus() that takes an array and sums 
separately positive and negative numbers

it should return an object like this:

{
    plus: 74, // sum of all positive numbers
    minus: -54 // sum of all negative numbers
}

*/


var nums = [10, -12, 30, -1, -8, 0, 14, -33, 20];
positive = nums.filter(function (a) { return a >= 0; }),
    sum = positive.reduce(function (a, b) { return a + b; });
negative = nums.filter(function (a) { return a <= 0}), 
    neg = negative.reduce(function (a, b) {return a + b})

console.log(sum);
console.log(neg);

// Write code here

// console.log(sumPlusMinus(nums));
// {plus: 74, minus: -54}

