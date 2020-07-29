
const express = require('express');
const router = express.Router();
const db = require('../models/database');

const bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());  //req.body(fill everything that client is sending back to us)

//render our index (view)
router.get('/', (req, res) => {

    db.query('SELECT * FROM todos')
    .then(records =>{
        res.render('index', {
            todos: records
        })
    })

    .catch(error =>{
        res.send(error)
    })
    // res.render('index');
})


router.get('/api', (req, res) => {
    //return all of the current todos

    db.query('SELECT * FROM todos')
    .then(records =>{
        
    })

})


router.post('/api', (req, res) => {
    // insert new todo
    let description = req.body.description
    console.log(description);
    db.none('INSERT INTO todos VALUES (DEFAULT, $1, $2)', [description, "FALSE"])
    .then(()=>{

        db.query('SELECT * FROM todos')
        .then(records =>{
            res.json(records)
        })
        .catch(error =>{
            res.send(error);
        })
    })

    .catch(error =>{
        res.send(error);
    })
})

router.patch('/api', (req, res) => {
    //update a todo description



})


router.delete('/api/:id', (req, res) => {


})

router.delete('/api/all', (req, res) => {


})

module.exports = router;