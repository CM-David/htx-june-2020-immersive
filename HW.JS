const nums = [33, -12, 20, 16, 5, 54, -21, 44, 61, -13, 15, 45, 25, 64, 32]

// var result = nums.filter (num => num >= 0)

// console.log(result);

// var evenResult = nums.filter(num => num % 2 == 0)

// console.log(evenResult);


// const square = [1, 2, 3]

// // Exponentiation
// var sqResult = square.map(num => num ** 2) 

// console.log(sqResult);

var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

// var persons = people.map(name=> "Good Job " + name ) 
// //carriage return type writers line feed
// console.log(persons.join('\r\n'));

ascOrder = people.sort((a, b) => a > b ? 1 : -1);
  console.log(ascOrder)


console.log("hello world ".repeat(3));