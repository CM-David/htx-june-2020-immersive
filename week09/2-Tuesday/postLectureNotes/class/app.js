const express = require('express');
const app = express();
const PORT = 3000;

const db =require('./models');

app.use(express.static('public'))
app.set('view engine', 'ejs')

// db.user.findAll()
// .then(results =>{
//     // console.log(results);
//     results.forEach(record =>{
//         console.log(`${record.firstname} ${record.lastname}`);
//     })
// })
// db.user.findByPk(4)
// .then(user =>{
//     console.log(user);
// })

// db.user.findAll({where: {firstname: 'John'}})
// .then(results =>{

//     console.log(results);

//     results.forEach(record =>{
//         console.log(`${record.firstname} ${record.lastname}`);
//     })
// })

// db.user.destroy({where: {firstname: 'Veronica'}})
// .then(rowDeleted =>{
//     console.log(rowDeleted);
// })

db.user.update({
    email: 'cd@Dc.com'
},
{
    where: {
        firstname: 'Chris'
    }
})
.then(updateRecord =>{
    console.log(updated);
})

// db.user.create({
//     firstname: 'Chris',
//     lastname: 'David',
//     email: 'c.david88@protonmail.com'
// });

// db.user.create({
//     firstname: 'Veronica',
//     lastname: 'Lino',
//     email: 'veronica@dc.com'
// });

// db.user.create({
//     firstname: 'Michael',
//     lastname: 'Cortez',
//     email: 'Michael@dc.com'
// });

// db.user.create({
//     firstname: 'Jeremy',
//     lastname: 'rousell',
//     email: 'jeremy@dc.com'
// });


// app.listen(PORT, ()=>{
//     console.log(`Powerman ${PORT}`);
// })