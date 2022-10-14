import express from 'express'
import { sqlConection } from './db.js'
import {PORT} from './config.js'

const app = express()

app.get('/', async (req, res) => {
  const [rows] = await sqlConection.query('SELECT * FROM users')
  res.json(rows)
})

app.get('/ping', async (req, res) => {
  const [result] = await sqlConection.query(`SELECT "hello world" as RESULT`);
  res.json(result[0])
})

app.get('/create', async (req, res) => {
  const result = await sqlConection.query('INSERT INTO users(name) VALUES ("John")')
  res.json(result)
})

app.listen(PORT)
console.log('Server on port', PORT);
