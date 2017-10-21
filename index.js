// index.js

const app = require('./app')
const port = 3000

app.listen(port, (err) => {
  if(err) {
    return console.log('Something wrong', err)
  }

  console.log(`server listening on ${port}`)
})