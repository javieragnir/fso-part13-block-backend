const express = require('express')
const app = express()
require('express-async-errors')

const { PORT } = require('./util/config')
const { connectToDatabase } = require('./util/db')

const notesRouter = require('./controllers/blogs')
const usersRouter = require('./controllers/users')

const { errorHandler } = require('./util/middleware')

app.use(express.json())

app.use('/api/blogs', notesRouter)
app.use('/api/users', usersRouter)

// put errorhandler last
app.use(errorHandler)

const start = async () => {
  await connectToDatabase()
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

start()