//PATH MODULE

const path = require('path')
//console.log(path)  
//console.log(path.sep)

const filePath = path.join('/content/', 'subfolder', 'readMe.Md')
//console.log(filePath)
//console.log(path.extname(filePath))

if (path.extname(filePath) !== '.Md') {
        console.log(`Wrong Input`)
} else {
    console.log(`Right Input`)
}

const base = path.basename(filePath)
//console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
//console.log(absolute)

