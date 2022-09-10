// Asynchronous nature of node

// declare variables


const statement2 = `Statement Number Two `
// setTimeout(()=> {
//     let statement = `Statement Number One `
//     console.log(statement )
// }, 1000)

// setTimeout(()=> {
//     console.log(statement2)
// }, 2000)

console.log('Statement Number Three ')

//Class, Objects and Arrays, Accessing items (dot and bracket notation)

const animals = {
    name: `dog`,
    sound: `bark`
}



class Animals {

constructor(name, sound) {
    this.name = name;
    this.sound = sound;
}

}

//const newAnimal = new Animals('pig', 'grunt', ) 
const newAnimal2 = new Animals('cow', 'mow')

//const animalCollection = [new Animals('pig', 'grunt', ), new Animals('duck', 'quack', )]

//const animalCollection = ['dog', 'cow', 'peacock']

animalCollection.push(newAnimal2)

console.log(animalCollection)
//console.log(animalCollection)