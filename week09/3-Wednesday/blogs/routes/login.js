const express = require('express');
const router = express.Router();
const db = require('../models');
const brcypt = require('bcryptjs');
const { response } = require('express');

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    console.log(username, password);

    let results = await db.users.findAll({ where: { username: username } });

    if (results.length > 0) {
        //test password here
        brcypt.compare(password, results[0].password, (err, response) => {
            if (response) {
                req.session.userid = username;
                res.redirect('/');
            } 
            else {
                res.redirect('/error');
            }
        });
    }

    // db.users.findAll({where: {username: username}})
    // .then(results =>{})

    // res.send('post data');
});

module.exports = router;
