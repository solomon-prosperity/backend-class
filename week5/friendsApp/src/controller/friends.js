const data = require('../model/data')
const FriendsModel = require('../model/friendsSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const cloudinary = require('../utils/cloudinary')
const fs = require('fs')


// Signup
const createFriend = async (req, res)=> {
    // const person = req.body
    // const generateId = data.length + 1
    // data.push({id: generateId , name: person.name})
    // res.status(201).json(data)

    // Mongoose Method

    // no two friends have thesame email 
    // encrypt passwords 

    const {name , age, phoneNumber, email , password} = req.body
    const small_name = name.toLowerCase()
    try {
    const friend = await FriendsModel.findOne({email})
    if (friend) return res.status(400).json({
        success: false,
        message: 'friend with this email already exist'
    })

    const hashedPassword = await bcrypt.hash(password, 12)

     let newFriend  = await FriendsModel.create(
        {name: small_name ,
         age,
         phoneNumber,
         email, 
         password: hashedPassword
        })
     await newFriend.save()

     delete newFriend._doc.password

     res.status(201).json({
         success: true,
         message: 'successfully created a new friend', 
         data: newFriend})
    } catch (error){
        res.status(400).json({
            success: false,
             message: "operation failed"}) 
    }
    
}

const signIn = async (req, res)=> {
    try {
        const {email, password} = req.body
        const friend  = await FriendsModel.findOne({email})
        if (!friend) return res.status(400).json({success: false, msg: "your email or password is incorrect"})
        const isValidPassword = await bcrypt.compare(password, friend.password)
        if (!isValidPassword) return res.status(400).json({success: false, msg: "your email or password incorrect"})

        const token = await jwt.sign({_id: friend._id, name: friend.name, age: friend.age}, process.env.JWT_SECRET)

        delete friend._doc.password
        res.status(200).json({
            success: true,
            message: 'friend logged in', 
            data: friend,
            token: token})
       } catch (error){
           res.status(500).json({
               success: false,
                message: "operation failed"}) 
       }
}


const getFriend = async (req, res)=> {
     const friendId = req.params.personId
    // const onePerson = data.find((person) => person.id == id )
    // res.status(200).send(onePerson)

    // Mongoose Method

    try {
     const friend  = await FriendsModel.findOne({_id: friendId})
     res.status(200).json({
         success: true,
         message: 'successfully retrieved data', 
         data: friend})
    } catch (error){
        res.status(400).json({
            success: false,
             message: "operation failed"}) 
    }
}

const getFriends = async (req, res)=> {
   // res.status(200).send(data)

   // Mongoose Method

   try {
    const friends  = await FriendsModel.find({})
    res.status(200).json({
        success: true,
        message: 'successfully retrieved data', 
        data: friends})
   } catch (error){
       res.status(400).json({
           success: false,
            message: "operation failed"}) 
   }
}


const updateFriend = async (req, res)=> {
     const payload = req.body
     const friendId = req.params.personId
    // const onePerson = data.find((person) => person.id == id )
    // onePerson.name = payload.name
    // res.status(200).send(onePerson)


    // Mongoose Method

    try {

        // method 1
        // let friend  = await FriendsModel.findOne({_id: friendId})
        // friend.name = payload.name
        // friend.save()

        // Method 2
        let friend = await FriendsModel.findOneAndUpdate({_id: friendId},payload, {new: true} )

        res.status(200).json({
            success: true,
            message: 'successfully updated record', 
            data: friend})
       } catch (error){
           res.status(400).json({
               success: false,
                message: "operation failed"}) 
       }

}


const deleteFriend = async (req, res)=> {
     const friendId = req.params.personId
    // const newPeople = data.filter((person) => person.id !== Number(id) )
    // res.status(200).send(newPeople)

    // Mongoose Method
    try {
        await FriendsModel.findByIdAndDelete(friendId)
        res.status(200).json({
            success: true,
            message: 'successfully removed data from database'})
       } catch (error){
           res.status(400).json({
               success: false,
                message: "operation failed"}) 
       }

}

const search = async (req, res)=> {
    const {q} = req.query
    // const result = data.filter((person) => person.name === q ) //exact match 
    // let result = data.filter((person)=> person.name.includes(q))
    // let result = data.filter((person)=> person.name.startsWith(q))
    // res.status(200).send(result)

    // Mongoose Method

   try {
    const friends  = await FriendsModel.find({name: q})
    res.status(200).json({
        success: true,
        message: 'successfully retrieved data', 
        data: friends})
   } catch (error){
       res.status(400).json({
           success: false,
            message: "operation failed"}) 
   }
}

const uploadAvatar = async (req, res) => {

    const {_id} = req.user
    
    const uploader = async (path) => await cloudinary.uploads(path , 'friend_avatars')
    let url;
 
    const file = req.file
 
    const {path} = file
    const newPath = await uploader(path)
 
    url = newPath.url
 
    fs.unlinkSync(path)
              
 
    let friend = await FriendsModel.findOne({_id: _id}, {password: 0})
 
    friend.avatar = url.toString()
 
    await friend.save()
 
    res.status(200).json({
     success: true,
     msg: "successfully uploaded an image for the friend",
     data: friend
 })
 
 }
 

module.exports = {
    createFriend,
    getFriend,
    getFriends,
    updateFriend,
    deleteFriend,
    search,
    signIn,
    uploadAvatar
}