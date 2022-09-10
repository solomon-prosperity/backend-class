const http = require('http')
// console.log(http)

const server = http.createServer((req, res)=> {
  //Homepage
  //About Us
  //Contact us
  //error page
  //console.log(req.url)
  // res.end(`Hello from the server`)

  if (req.url === '/') {
    res.end(`Home Page`)
  } else if(req.url === '/about'){
    res.end(`About Us Page`)
  }else if(req.url === '/contact'){
    res.end(`Contact Us Page`)
  } else {
    res.end(`<h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>`)
  }



})

//request routing
//introduce working with external dependencies

server.listen(5000, ()=> {
    console.log(`server is running on port 5000`)
})