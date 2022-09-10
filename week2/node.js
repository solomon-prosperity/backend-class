//Globals 
//__dirname
//__fileName
//require
const {name, addnumbers} = require('./functions')
const sayHello = () => {
    console.log(`Hello ${name}`)
}

// const path = __dirname 
// console.log(path)

// const file = __filename
// console.log(file)
addnumbers(7,9)
sayHello()