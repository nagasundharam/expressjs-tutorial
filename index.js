const express = require('express');
const { usernameController, searchController } = require('./controller');
const router = require('./route');


const app = express();

const PORT = 3000;

//Define in a route

app.get('/',(req,res)=>{
    res.send('Hello Express');

})


app.use(express.json());
// :username used to access the url name

//post request
app.post('/users',(req,res)=> {
    const {name,email} = req.body;

    res.json({
        messase:` created a ${name} with  ${email}  successfully`
    })
})

// put method

app.put('/users/:id',(req,res)=>{
    const userId = req.params.id;
    const {name,email} = req.body;

    res.json({
        message:`user id${userId} is updated to  ${name} and ${email}`
    })
})

app.use('/user',router);
//

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})
