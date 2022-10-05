const express = require('express')
const data = require('./data')
const {sayHi, logger} = require('../week5/middlewares')

const app = express()
app.use(express.json())



//app.use(logger)
app.get('/', (req, res)=> {
    res.status(200).send(`Homepage`)
})

// CRUD
app.get('/data', (req, res)=> {
    res.status(200).send(data)
}) //Read Operation

app.post('/data', (req, res)=> {
const person = req.body
data.push(person)
res.status(201).json(data)
}) // Create Operation

app.post('/data2',logger, sayHi, (req, res)=> {
    const person = req.body
    data.push(person)
    res.status(201).json(data)
  }) // Create Operation

app.get('/data/:personId', (req, res)=> {
    const id = req.params.personId
    const onePerson = data.find((person) => person.id == id )
    res.status(200).send(onePerson)
}) // Read Operation

app.get('/search', (req, res)=> {
    const {q} = req.query
    // const result = data.filter((person) => person.name === q ) //exact match 
    // let result = data.filter((person)=> person.name.includes(q))
    let result = data.filter((person)=> person.name.startsWith(q))
    res.status(200).send(result)
}) // Read Operation

app.put('/data/:personId', (req, res)=> {
    const payload = req.body
    const id = req.params.personId
    const onePerson = data.find((person) => person.id == id )
    onePerson.name = payload.name
    res.status(200).send(onePerson)

}) // Update Operation


app.delete('/data/:personId', (req, res)=> {
    const id = req.params.personId
    const newPeople = data.filter((person) => person.id !== Number(id) )
    res.status(200).send(newPeople)

}) // Update Operation


app.listen(50000,() => {
    console.log(`server is up and running on port 50000`)
})