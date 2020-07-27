const express = require('express');
const app = express()

//views
app.set('view engine', 'ejs')

//public
app.use(express.static('public'))

//routes
app.use(require('./routes/dishes'));//list of dish
app.use(require('./routes/newdish'));//form for new dish

app.listen(3000, () => {
    console.log('Powerman 3000');
})