const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('./public'))

app.get('/', (req, res)=> {
    res.status(200).sendFile(path.resolve(__dirname, './public/index.html')) 
})




app.listen(50000,() => {
    console.log(`server is up and running`)
})