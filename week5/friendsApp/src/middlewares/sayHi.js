const sayHi = (req,res,next) => {
    const name = req.body.name

    console.log(`Hi ${name}`)

    next()
}


module.exports = sayHi