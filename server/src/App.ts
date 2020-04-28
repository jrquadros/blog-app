import * as express from 'express'
import { Router } from './Routes/v1/Router'
import * as cookieParser from 'cookie-parser'

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use('/v1', Router)

export const App = app
