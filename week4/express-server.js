const express = require('express')

const app = express()

app.get('/', (req, res)=> {
    res.status(200).send(`Homepage`)
})

app.get('/about', (req, res)=> {
    res.status(200).send(`ABOUT US`)
})

app.get('/contact', (req, res)=> {
    res.status(200).send(`CONTACT US`)
})

app.get('*', (req, res)=> {
    res.status(404).send(`Page Not Found`)
})


app.listen(50000,() => {
    console.log(`server is up and running`)
})