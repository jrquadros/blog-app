import { App } from './App'
import * as mongoose from 'mongoose'
import * as dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.SERVER_PORT

;(async function start() {
  mongoose
    .connect('mongodb://localhost:27017/todo', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('database connected')
    })
    .catch((error) => {
      console.log(`database error ${error}`)
    })

  App.listen(PORT, () => console.log(`Server is running at ${PORT}`))
})()
