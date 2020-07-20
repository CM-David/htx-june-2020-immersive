
const express = require('express')

const app = express()


app.set('view engine', 'ejs')

//public

app.use(express.static('public'))


//route ref

app.use(require('./routes/index'))
app.use(require('./routes/speakers'))


app.listen(3000, () => {

    console.log('Powerman 3000')
})