// (function (a, b) {
//     const total = a + b
//     console.log(total)
// })(1,7); //IIFE

const addTotal = (a , b) => {
    const total = a + b
    console.log(total)
    return total
} // Function expression
const fig = addTotal(7,8)
console.log({fig: fig})

function addnumbers (a , b) {
    const total = a + b
    console.log(total)
}// Function declaration

const name = `John Doe`

module.exports = {addnumbers, name }