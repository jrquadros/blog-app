import * as express from 'express'
import * as cors from 'cors'
import { Router } from './Routes/v1/Router'
import * as cookieParser from 'cookie-parser'
import { Config } from './config/Config'

const app = express()
app.use(
  cors({
    credentials: true,
    origin: Config.cors.webOrigin,
  })
)

app.use(express.json())
app.use(cookieParser())

app.use('/v1', Router)

export const App = app
