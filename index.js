// index.js

const http = require('http')
const port = 3000

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end('hello Node.js Server!!')
}

const server = http.createServer(requestHandler)

server.listen(port, (error) => {
  if (error) {
    return console.log('something is wrong', error)
  }

  console.log(`server is listening on ${port}`)
})