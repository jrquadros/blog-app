import * as express from 'express'
import { Routes } from './Routes'

const app = express()

app.use(express.json())

app.use('/api', Routes)

export const App = app
