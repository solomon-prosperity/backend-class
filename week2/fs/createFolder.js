const fs = require('fs')

//check if folder already exists
// create a new if that folder doesn't already exist

try {
    if (!fs.existsSync(`ios`)){
    fs.mkdirSync(`ios`)
    console.log(`successful`)
    }
} catch (error) {
    console.log(error)
}