const express = require('express');
const { usernameController, searchController } = require('./controller');
const router = require('./route');


const app = express();

const PORT = 3000;

//Define in a route

app.get('/',(req,res)=>{
    res.send('Hello Express');

})
// :username used to access the url name

//post request
app.post('/users',express.json(),(req,res)=> {
    const {name,email} = req.body;

    res.json({
        messase:` created a ${name} with  ${email}  successfully`
    })
})

app.use('/user',router);
//

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})
