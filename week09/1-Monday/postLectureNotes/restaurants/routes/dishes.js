
const express = require('express');
const router = express.Router();
const db = require('../models/database'); //DB instance
const { result } = require('../models/database');



router.get('/dishes', (req, res) => {
    
    db.query('SELECT * FROM Dishes')
    .then(results =>{
        // pass results

        res.render('dishes', {
            dishes: results
        })
    })
    .catch(error=>{
        res.send(console.error())
    })
    // res.render('dishes', )
})




module.exports = router