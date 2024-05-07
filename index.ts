import express from "express"
import dotenv from "dotenv"
import db from "./helpers/db"
// const indexRoute = require('./routes/index')
import indexRoute from "./routes/index"
// const cors = require("cors")
import cors from 'cors'
import { Response } from "express"
import { NextFunction } from "express"
import { Request } from "express"
const app = express()
// const losger = require('./helpers/logger/logger')

//logger('we are in ', 'index.js')

dotenv.config({
  path: "./dev.env"
})

app.use(cors())
db()
app.use(express.json())




app.use('/', indexRoute)

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(`in index.js ${err.stack}`)
  next(err)
})




const port = 25000
app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})

