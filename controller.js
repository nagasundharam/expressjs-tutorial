
const usernameController = (req,res)=> {
    const username = req.params.username;
    res.send(`Welcome ${username}`)
}
const searchController = (req,res)=>{
    const keyword = req.query.keyword;
    res.send(`Searching for ${keyword}`);
}

module.exports = {
    usernameController,
    searchController
}