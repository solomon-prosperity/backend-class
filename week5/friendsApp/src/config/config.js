const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()

const connectionString = process.env.CONNECTION_STRING

const connectDb = async  ()=> {
    await mongoose.connect(connectionString)
    console.log(`connected to database`)
}


module.exports = connectDb