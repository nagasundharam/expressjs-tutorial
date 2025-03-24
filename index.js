const express = require('express');
const { usernameController, searchController } = require('./controller');
const router = require('./route');


const app = express();

const PORT = 3000;

//Define in a route
// event controller in middle ware
app.use((req,res,next)=> {
    console.log("Start")
    res.on('finish',()=> {
        console.log("End");
    })
    next()

})

app.get('/error',()=>{
    throw new Error('This is text error');
})

app.use((err,req,res,next)=>{
    console.error(err.message);
    res.send("Internal server Error");
})

app.get('/',(req,res)=>{
    console.log('middle');
    res.send('Hello Express');

})

app.get('/',(req,res)=>{
    res.send('Hello naga');
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

// delete method

app.delete('/users/:id',(req,res)=> {
    const userId  = req.params.id;
   

    res.json({
        message:`user id ${userId} is deleted successfully`
    })
})

app.get('/things/:name/:id([0-9]{5})',(req,res)=> {
     const { name , id} = req.params;

     res.json({
        id,name
     });
})
app.get("*",(req,res)=> {
    res.send('Sorry this is an invalid route');

})
app.use('/user',router);
//

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})
// middle ware is an expressJs are functions that execute before the final request handler they can
