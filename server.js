import { message } from './src/page.js'
import express from 'express'
import cors from 'cors'
import { openConnection } from './src/mongo.js'

const server = express()

server.use(cors())
server.get('/', (req, res) => {
  res.send('Home Page')
})

server.get('/mongo', async (req, res) => {
  try {
    res.send(openConnection())
  } catch (err) {
    res.send("A problem occurred.")
  }
})

server.get('/message', (req, res) => {
  res.send(message())
})

server.listen(5000, '0.0.0.0')