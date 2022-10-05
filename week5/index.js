//const fetch = require('')
/*
    1. req.query
    2. express.Router()
    3. Design Pattern:  MVC
    4. Middleware

    Types of middlewares

    1. Application Level 
    2. Router Level Middleware router.use()
    3. Error handling Middleware
    4. Builtin Middleware
    5. Third Party Middlewares
*/
// const fetch = require("node-fetch") 
// const get = () => {
//     console.log(`working....`)
//   fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => response.json())
//   .then(json => console.log(json))
// }

//get()


const https = require('https')
// var querystring = require('querystring')

const postData = JSON.stringify({
    id: 101,
    title: 'foo',
    body: 'bar',
    userId: 1,
})

const options = {
    hostname: 'jsonplaceholder.typicode.com',
    path: '/posts',
    port: 443,
    method: 'POST',
    headers: {'content-type' : 'application/json'}
  }



// const  req = https.request(options, (res) => {
//   let str = ''

//   res.on('data',  (chunk) => {
//      str += chunk
  
    
//   })

//   res.on('end',  ()=> {
//     // Do stuff (if you want)
//     console.log(postData)
//     console.log('working')
  
//   })
// })
// .on('error', (err)=>{
//     console.log(err)
// })

// req.write(postData)
// req.end()

// const  req = https.request(options, (res) => {
//   let str = ''

//   res.on('data',  (chunk) => {
//      //str += chunk
//      const r = JSON.parse(chunk)
  
//     console.log(r)
//   })

//   res.on('end',  ()=> {
//     // Do stuff (if you want)
//     //console.log(postData)
//     console.log('done')
  
//   })
// })
// .on('error', (err)=>{
//     console.log(err)
// })

// //req.write(postData)
// req.end()

//const ab = 1 == '1'
const ab = 1 === '1'

console.log(ab)