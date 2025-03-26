const { default: mongoose } = require("mongoose");

const connectDB = async()=>{
    const MONGODB_URI = "mongodb+srv://nagasundharam553:bgQ353HVf8YvMvpb@cluster0.rkvly.mongodb.net/?appName=Cluster0"
    await mongoose.connect(MONGODB_URI).then(()=> {
        console.log('Database connected successfully');
    })

}

module.exports = connectDB;