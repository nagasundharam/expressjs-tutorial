const cookieParser = require('cookie-parser');
const express = require('express');
const session = require('express-session');



const app = express();

app.use(cookieParser())

app.use(session({
    secret:"sample-secret",
    resave:false,
    saveUninitialized:false
}))

const PORT = 3000;

app.listen(PORT,()=>{
            console.log(`Server is running on http://localhost:${PORT}`);
});
   

app.get('/',(req,res)=> {
   
res.send("Hello");
})

app.get('/visit',(req,res)=> {
    if (req.session.page_views){
        req.session.page_views++;
        res.send(`You visited this page ${req.session.page_views} times`)
    }
    else {
        req.session.page_views = 1;
        res.send("Welcome to this page for the first time!")
    }
})
app.get('/remove-visit',(req,res)=> {
    req.session.destroy();
    res.send("Session removed successfully");
})




// middle ware is an expressJs are functions that execute before the final request handler they can
