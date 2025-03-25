const express = require('express');
const { usernameController, searchController } = require('./controller');
const router = require('./route');
const multer = require('multer');
const storage = require('./config/multer.jsx');

const app = express();
const upload = multer({storage,limits:{
    fileSize:10240000
    
}
});
const PORT = 3000;

// set EJS as the view engine

app.use(express.urlencoded({extended:true}));

app.use(upload.single('file'));
app.get('/',(req,res)=>{
   res.send('Hello wha ')
  
})

app.post('/form',(req,res)=> {
console.log(req.body);
res.send('Form Received');
console.log(req.file);
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})
// middle ware is an expressJs are functions that execute before the final request handler they can
