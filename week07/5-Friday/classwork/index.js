var express = require('express')

let app = express()

const PORT = 3000;



app.get('/', (req, res) => {
    
    res.send('Front Page')
})

app.get('/aboutus', (req, res) => {
    
    res.send('About us')
})

app.get('/faq', (req, res) => {
    
    res.send('FAQ')
})

app.get('*', (req, res) => {
    
    res.send('reached an error')
})
 



app.listen(PORT, () => {
    
    console.log(`Powerman ${PORT}`);
})