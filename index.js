const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const notes = []
let newId = 0

app.use(bodyParser.json())

app.get('/notes', (req, res) => {
  res.json(notes)
})

app.post('/notes', (req, res) => {
  newId += 1
  const note = req.body
  note.id = newId
  notes.push(note)
  res.sendStatus(201)
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
