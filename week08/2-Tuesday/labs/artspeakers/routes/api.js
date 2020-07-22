

const express = require('express');
const router = express.Router()
const bodyParser = require('body-parser');


const feedbackData = require('../data/feedback.json');


const fs = require('fs');


router.get('/api', (req, res) => {

    res.json(feedbackData)

    
})

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended: false}))

router.post('/api', (req, res) => {
    
    console.log(req.body);

    feedbackData.unshift(req.body)
    fs.writeFile('data/feedback.json', JSON.stringify(feedbackData), 'utf8', (err)=>{

        if(err){
            console.log(err);
        }
    })

    res.json(feedbackData)
})

module.exports = router