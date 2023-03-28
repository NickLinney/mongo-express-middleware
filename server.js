import { message } from './page.js'
import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.get('/', (req, res) => {
  res.send('Home Page')
})

app.get('/users', (req, res) => {
  res.send('Users Page')
})

app.get('/message', (req, res) => {
  res.send(message())
})

app.listen(3000, '0.0.0.0')