const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const authRouter = require('./auth/router')
const imageRouter = require('./Image/router')
const userRouter = require('./User/router')

const app = express()
const port = process.env.PORT || 4000

const corsMiddleware = cors()
app.use(corsMiddleware)

const parserMiddleware = bodyParser.json()
app.use(parserMiddleware)

app.use(authRouter)
app.use(imageRouter)
app.use(userRouter)

app.listen(port, () => console.log(`Listening on: ${port}`))