const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const Person = require('./models/person.jsx');

const app = express();

const PORT = 3000;
const startServer =  async ()=> {
    try {
        await connectDB();
        console.log("connnected Successfully");
        app.listen(PORT,()=>{
            console.log(`Server is running on http://localhost:${PORT}`);
    })
    }
    catch (error){
        console.error("Database connection failed",error);
        process.exit(1);

    }

}
startServer();

app.get('/',(req,res)=> {
res.send("Hello");
})

app.post('/person',express.json(),async (req,res)=>{
    console.log("1");
   try {
    const {name,age,email} = req.body;
    const newPerson = new Person({
        name,age,email}
    )
   
    await newPerson.save();
    console.log(newPerson);
    res.send("Person Added");
}catch(error){
    res.send(error.errmsg);
   
}
})

// updating data in mongodb

app.put('/person',express.json(),async (req,res)=> {
    const { id } = req.body;


    if (!id){
        return res.status(404).send('ID is required');

    }
    const personData = await Person.findById(id);
     personData.age = 25;
     personData.save();

    console.log(personData);

    res.send('Person Added');
})
app.delete('/person/:id',async (req,res)=> {
    const {id}  = req.params;
    await Person.findByIdAndDelete(id);
    res.send('User Deleted');
})







// set EJS as the view engine



app.get('/',(req,res)=>{
    res.send('Hello wha ')
   
 })


// middle ware is an expressJs are functions that execute before the final request handler they can
