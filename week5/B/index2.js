const express = require('express')
const app = express()
const cors = require('cors')
const port = 3001

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('website B')
})

app.get('/trigger-webhook-event', async (req,res) => {
  try{
    const data ={
      secret: "secret123",
      event: "event-b"
    }
    const response = await fetch('http://localhost:3000/github-event', {
    method: "post",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })
  res.send('event success')
} catch (error) {
  console.log(error)
}
})

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })