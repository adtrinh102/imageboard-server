const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const Image = require('./Image/model')

app.listen(port, () => console.log(`Listening on: ${port}`))