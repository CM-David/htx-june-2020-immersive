

const express = require('express');
const router = express.Router()
const data = require('../data/data.json');


router.get('/feedback', (req, res) => {



    res.render('feedback.ejs',{
        maxList: data.speakers,
        pageTitle: "Feedback Form",
        pageID: 'feedback',
        artwork: []
    }
)

})


module.exports = router