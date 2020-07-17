
const express = require('express');

const app = express()

app.get('/', (req, res)=>{
    res.send('home page')
})

// app.get('/cat*', (req, res) => {
//     res.send('cats')
// })

// app.get('/puppies', (req, res) => {
//     res.send('puppies')
// })

// app.get('/pictures', (req, res) => {
//     res.send('testing')    
// })


// app.get('/flights/:from-:to', (req, res) => {

//     res.send(`depart from : ${req.params.from} Arriving at: ${req.params.to}`)
    
// })

app.get('/calculator/:from-:math-:to', (req, res) => {

    res.send(` ${req.params.int(from)} ${req.params.math} ${req.params.int(to)}`)
    
})

app.listen(3000, ()=>{
    console.log('im on 3000');
})