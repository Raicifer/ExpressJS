const express = require('express')
const router = express.Router()


// define the home page route
router.get('/', (req, res) => {
  res.send('Shop home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About Shop')
})
// define the contact route
router.get('/contact/:slug', (req, res) => {
  res.send(`fetch the Shop for ${req.params.slug}`)
})

module.exports = router