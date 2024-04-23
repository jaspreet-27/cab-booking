// eslint-disable-next-line @typescript-eslint/no-unused-vars
import express, { Request, Response } from 'express'
import routes from './src/routes/rideRoutes'
import { PORT } from './env'
import helmet from 'helmet'
import cors from 'cors'

const app = express()
process.env.PORT || 8000

app.use(express.json())
routes(app)

// Use Helmet middleware
app.use(helmet())

// Use CORS middleware
app.use(cors())

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})


