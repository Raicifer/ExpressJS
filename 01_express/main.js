const express = require('express')//Express.js/Getting Started/HelloWorld
const app = express()
const port = 3000

//Express.js/Getting Started/StaticFiles
app.use(express.static('public')) 

app.get('/', (req, res) => {  //
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('About Us')
})

app.get('/contact', (req, res) => {
  res.send('Contact Us')
})

app.get('/more/blog', (req, res) => {
  res.send('More')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})