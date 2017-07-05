const express = require('express')

const app = express()

const notes = []

app.get('/notes', (req, res) => {
  res.json(notes)
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
