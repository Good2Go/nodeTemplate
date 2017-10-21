// index.js

const express = require('express')
const app = express()
const port = 3000

// Express middlewares
// next() signals Express that it can jump
// to next middleware or route handler
app.use((request, response, next) => {
  console.log(request.headers)
  next()
})

// Adds extra property 'chance'
app.use((request, response, next) => {
  request.chance = Math.random()
  next()
})

app.get('/', (request, response) => {
  throw new Error('Error!!!')
})

// Error handler function should be the last
// function added with app.use
// It has next callback, it can be used to chain
// multiple error handlers.
app.use((err, request, response, next) => {
  //handle Error
  console.log(err)
  response.status(500).send('Something broke!')
})

app.listen(port, (err) => {
  if(err) {
    return console.log('Something wrong', err)
  }

  console.log(`server listening on ${port}`)
})
