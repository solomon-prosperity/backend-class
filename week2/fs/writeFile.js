const fs = require('fs')

//const data = `I am an operating system `

//Synchronous
// fs.writeFileSync('./linux/index.txt', data, (error)=> {

//     if (error) {
//         console.log(error)
//     }
//     console.log(`done`)
// })

//write Async
let data = `Something Else`
try {
    fs.writeFile('./linux/text.txt', data, err =>{
        if (err){
            console.log(err)
        }
        console.log(`successful`)
    })
 }catch(error){
     console.log(error)
 }