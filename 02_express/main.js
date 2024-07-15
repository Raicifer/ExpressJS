const express = require('express')
const blog = require('./routes/blog')
const shop = require('./routes/shop')


const app = express()
const port = 3000

app.use(express.static('public'))
app.use('/blog', blog)
app.use('/shop', shop)

app.get('/', (req, res) => {
  console.log("This is a get Req")
  res.send('Hello World! Get Req in postman')
})

app.post('/', (req, res) => {
  console.log("This is a Post Req")
  res.send('Hello World! Post Req')
})

app.put('/', (req, res) => {
  console.log("This is a Put Req")
  res.send('Hello World! Put Req')
})

app.delete('/', (req, res) => {
  console.log("This is a Delete Req")
  res.send('Hello World! Delete Req')
})


app.get('/index', (req, res) => {
  console.log("This is a Index")
  res.sendFile('template/index.html',{root:__dirname})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})