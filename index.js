const express = require('express');
const { usernameController, searchController } = require('./controller');


const app = express();

const PORT = 3000;

//Define in a route

app.get('/',(req,res)=>{
    res.send('Hello Express');

})
// :username used to access the url name
app.get('/user/:username',usernameController);

//
app.get('/search',searchController)
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})
