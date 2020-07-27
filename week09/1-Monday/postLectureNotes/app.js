const app = require('express')();
const promise = require('bluebird'); //our promisee library that we will pass to pg-promise
let initOptions = {
    promiseLib: promise
}
// configure a connection to DB
// let config = {
//     host: 'localhost',
//     port: 5432,
//     database: 'pgDB2020',
//     user: 'postgres'
// }
let config2 = {
    host: 'localhost',
    port: 5432,
    database: 'corhort2020',
    user: 'postgres'
}
const pgp = require('pg-promise')(initOptions);
// const db = pgp(config); // Returns DB Object, has methods to update, insert, etc... (CRUD operations)
const db2 = pgp(config2);
// console.log(db);
// db.none(`INSERT INTO students VALUES (DEFAULT, 'Dan', 'Gelok', 'M');`)
//     .then(() => {
//         console.log('record was inserted')
//     })
db2.one(`SELECT * FROM author WHERE name='Jeremy'`)
    .then((results) => {
        // returns array of objects where each object is a record from our database
        console.log(results)
        // results.forEach(student => {
        //     console.log(student.name);
        // })
    })
    .catch((error) => {
        console.log(error);
    })
// db.result(`INSERT INTO student VALUES (DEFAULT, 'Kat', 'kat@me.com', '')`)

