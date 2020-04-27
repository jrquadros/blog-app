import * as express from 'express'
import { Router } from './Routes/v1/Router'

const app = express()

app.use(express.json())

app.use('/v1', Router)

export const App = app
