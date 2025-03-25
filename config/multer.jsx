const multer = require("multer");


const storage = multer.diskStorage({
    destination:'uploads',
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+'_'+Date.now()+file.originalname)
    }
})

module.exports = storage;