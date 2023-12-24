const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.json('website A')
})

app.get('/github-event', (req, res) => {
  if (req.body.secret != 'secret123') {
    return res.status(400).json()
  }
  console.log('Incoming Webhook')
  res.json()
})

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })