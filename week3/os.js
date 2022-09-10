//Operating System Module

const os = require ('os')

// const userInfo = os.userInfo()
// console.log(userInfo)

const uptime = `Your system uptime is ${os.uptime()} milli seconds`
console.log(uptime)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
  }
  console.log(currentOS)