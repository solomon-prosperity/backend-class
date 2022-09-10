//Array Methods
//Functions: function declaration, Function expression(arrow functions), IIFE(Immediately invoked function expression), callback functions
//Globals: __dirname, __filename, require
//module.exports
////Introduction to Nodejs core modules: fs, os, http, path


let animals  = [];

//adding an item to the array
//remove from the front
//remove from the back
// iterate through the array
// search the array for an item


animals.push('cat')
animals.push('dog')
animals.push('fish')
animals.push('pig')
animals.unshift('cow')

// animals.map((animal)=> {
//     console.log(animal)
// })
//console.log(animals)
let newAnimals = animals.find((animal) => animal == 'dog'
    //return animal
)

//newAnimals = 'elephant'
// console.log(newAnimals)
// console.log(animals)

// Functions

// function addnumbers (a , b) {
//     const total = a + b
//     console.log(total)
// }// Function declaration

// addnumbers(1,4)

(function () {
    const total = 1 + 2
    console.log(total)
})();


const addTotal = (a , b) => {
    const total = a + b
    console.log(total)
} // Function expression

addTotal(5,6)