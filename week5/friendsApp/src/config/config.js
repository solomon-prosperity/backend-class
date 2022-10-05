const mongoose = require('mongoose');

const connectDb = ()=> {
    mongoose.connect(`mongodb+srv://brynokings:7878998@cluster0.9cucvzk.mongodb.net/?retryWrites=true&w=majority`)
    console.log(`connected to database`)
}


module.exports = connectDb