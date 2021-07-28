const express = require('express')
const app = express()
const cors = require('cors')
const post = {}
const {randomBytes} = require('crypto')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(cors())

app.get('/posts', (req, res) => {
    res.send(post)
})

app.post('/posts', (req, res) => {
    const id = randomBytes(4).toString("hex")
    const {title} = req.body

    post[id] = {
        id,
        title
    }

    res.status(201).send(post[id])
})

app.listen(4000, () => {
    console.log('Its running port 4000')
})
