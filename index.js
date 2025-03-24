const express = require('express');
const { usernameController, searchController } = require('./controller');
const router = require('./route');


const app = express();

const PORT = 3000;

// set EJS as the view engine

app.set('view engine','ejs')
app.use('/public',express.static('public'));
app.get('/',(req,res)=>{
    const userName = 'nagasundhram'
    res.render('index',{userName});
  
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})
// middle ware is an expressJs are functions that execute before the final request handler they can
