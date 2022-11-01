const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
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

app.use('/friend', router) // friends
app.use('/hobby', hobbyRouter) // hobby

const port = process.env.PORT

app.listen(port, async () => {
    await connectDb()
    console.log(`server is up and running on port ${port}`)
})