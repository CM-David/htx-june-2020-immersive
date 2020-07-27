//form for new dishes       


const express = require('express');
const router = express.Router()
const db = require('../models/database');
const bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({extended: false})); // req.body add form data

//display form
router.get('/newdish', (req, res) => {
    
    db.query('SELECT * FROM categories')
    .then(results =>{
        res.render('newdish', {
            categories: results
        })
    })
    .catch(error => {
        res.send(error)
    })
});


// grab info
router.post('/newdish', (req, res) => {
    
    let name = req.body.title;
    let category = parseInt(req.body.category);
    let foodDescription = req.body.description;
    let price = parseInt(req.body.price);
    let imageurl = req.body.imageURL;

    //take from data and insert record in database

    db.none(`INSERT INTO Dishes VALUES (DEFAULT, $1, $2, $3, $4, $5)`, [name, category, foodDescription, price, imageurl])
    .then(() => {
        res.redirect('/dishes')
    })
    .catch(error =>{
        res.send(error)
    })

    // res.send('post')
});





module.exports = router