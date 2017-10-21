// app/index.js

const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()


app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts')
}))

app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))


app.get('/', (request, response) => {
  response.render('home', {
    name: 'Daman'
  })
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

module.exports = app
