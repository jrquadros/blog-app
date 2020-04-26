import * as express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('server running')
})

export const App = app
