import { message } from './src/page.js'
import express from 'express'
import cors from 'cors'

const server = express()

server.use(cors())
server.get('/', (req, res) => {
  res.send('Home Page')
})

server.get('/users', (req, res) => {
  res.send('Users Page')
})

server.get('/message', (req, res) => {
  res.send(message())
})

server.listen(5000, '0.0.0.0')