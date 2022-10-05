// const express = require('express');
// const app = express()
// app.use(express.json())

//custom middleware
const sayHi = (req,res,next) => {
    const name = req.body.name

    console.log(`Hi ${name}`)

    next()
}

const logger = (req, res, next)=> {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    next()
}

// Error Handling middleware

const handleError = (err, req, res, next) => {

}

module.exports = {sayHi, logger}