const data = require('../model/data')


const createFriend = (req, res)=> {
    const person = req.body
    const generateId = data.length + 1
    data.push({id: generateId , name: person.name})
    res.status(201).json(data)
}


const getFriend = (req, res)=> {
    const id = req.params.personId
    const onePerson = data.find((person) => person.id == id )
    res.status(200).send(onePerson)
}

const getFriends = (req, res)=> {
    res.status(200).send(data)
}


const updateFriend = (req, res)=> {
    const payload = req.body
    const id = req.params.personId
    const onePerson = data.find((person) => person.id == id )
    onePerson.name = payload.name
    res.status(200).send(onePerson)

}


const deleteFriend = (req, res)=> {
    const id = req.params.personId
    const newPeople = data.filter((person) => person.id !== Number(id) )
    res.status(200).send(newPeople)

}

const search =  (req, res)=> {
    const {q} = req.query
    // const result = data.filter((person) => person.name === q ) //exact match 
    // let result = data.filter((person)=> person.name.includes(q))
    let result = data.filter((person)=> person.name.startsWith(q))
    res.status(200).send(result)
}

module.exports = {
    createFriend,
    getFriend,
    getFriends,
    updateFriend,
    deleteFriend,
    search
}