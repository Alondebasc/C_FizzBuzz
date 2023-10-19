import express from 'express'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import logger from 'morgan'
const app = express()
app.use(logger('dev'))

const port = 3000
app.use(express.json())
const clientBuildPath = join(dirname(fileURLToPath(import.meta.url)), '../client/dist')
app.use(express.static(clientBuildPath))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/`)
})

app.get('/api/v1/health', (req, res) => {
  res.status(200).json({ status: 'Healthy' })
})