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

app.put('/notes/:id', (req, res) => {
  const itemId = parseInt(req.params.id, 10)
  const item = notes.find(item => {
    return item.id === itemId
  })
  if (!item) {
    return res.sendStatus(404)
  }
  Object.assign(item, req.body)
  res.sendStatus(200)
})

app.delete('/notes/:id', (req, res) => {
  const itemId = parseInt(req.params.id, 10)
  const itemIndex = notes.findIndex(item => {
    return item.id === itemId
  })
  if (itemIndex === -1) {
    return res.sendStatus(404)
  }
  notes.splice(itemIndex, 1)
  res.sendStatus(204)
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
