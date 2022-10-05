const express = require('express')
const app = express()
const router = require('./src/router/friendsRouter')
const hobbyRouter = require('./src/router/hobbyRouter')
// Middlewares
const logger = require('./src/middlewares/logger')
const sayHi = require('./src/middlewares/sayHi')
const connectDb = require('./src/config/config')

app.use(express.json())
app.use(logger)

//hostname localhost:5000/data
app.get('/', sayHi, (req, res)=> {
    res.status(200).send(`Homepage`)
})

app.use('/data', router) // friends
app.use('/hobby', hobbyRouter) // hobby

connectDb()
app.listen(50000,() => {
    console.log(`server is up and running on port 50000`)
})