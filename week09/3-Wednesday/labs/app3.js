const express = require('express');
const app = express()

const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

app.set('view engine', 'ejs')

app.use(session({
    secret: 'my dog likes chicken',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false, maxAge: 14 * 24 * 60 * 60 * 1000}
}))

let authLogin = (req, res, next) =>{
    //check sess username
    console.log('hello from the middle');
    if(req.session.username){
        next()
    }
    else{
        res.redirect('/login')
    }
}

app.all('/admin/*', authLogin, (req, res, next) => {
    next();
})


app.get('/', (req, res) => {
    res.send('home page')
    
})

app.get('/admin/dashboard', (req, res) => {
    res.send('dashboard')
    
})

app.get('/admin/users', (req, res) => {
    res.send('users')
    
})

app.get('/login', (req, res) => {

    res.render('login')
    
})




let users = [
    {username: 'john', password: '1234'},
    {username: 'chris', password: '1234'},
    {username: 'ralph', password: '1234'},
    {username: 'mike', password: '1234'},
]

app.post('/login', (req, res) => {

    let userID = req.body.userId;
    let password = req.body.password;

    let user = users.find(userRecord =>{
        return userRecord.username == userID && userRecord.password == password
    })

    if(user != null){
        //set sess info
        if(req.session){
            req.session.username = userID
            res.redirect('/')
        }
    }
    else {
        res.redirect('/login')

    }

    // res.send('stuff')
    
})

app.listen(3000, () => {
    console.log('powerman 3000');
    
})