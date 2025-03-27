const cookieParser = require('cookie-parser');
const express = require('express');



const app = express();

app.use(cookieParser())

const PORT = 3000;

app.listen(PORT,()=>{
            console.log(`Server is running on http://localhost:${PORT}`);
});
   

app.get('/',(req,res)=> {
    res.cookie('name','express-app',{maxAge:360000});
res.send("Hello");
})

app.get('/fetch',(req,res)=> {
    console.log(req.cookies);
    res.send("API CAlled");
})
app.get("/remove-cookie",(req,res)=> {
    res.clearCookie('name');
    res.send("removed cookie successfully");
})



// middle ware is an expressJs are functions that execute before the final request handler they can
