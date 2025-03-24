
const userLogin = (req,res)=>{
    res.send('this is user login route');
}


const userSignup = (req,res) => {
    res.send('this is user signup login');
}
module.exports = {
   userLogin,userSignup,
}
