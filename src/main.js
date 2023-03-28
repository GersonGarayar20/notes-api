import { config } from 'dotenv'
import { DBConnect } from './config/mongo.js'
import express from 'express'
import cors from 'cors'
import { router } from './routes/index.js'

config()
DBConnect()

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', router)

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
