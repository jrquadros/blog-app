import { App } from './App'
import { Config } from './config/Config'
import * as mongoose from 'mongoose'
import * as dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.SERVER_PORT

;(async function start() {
  mongoose
    .connect(Config.mongoose.url || '', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => {
      console.log('database connected')
    })
    .catch((error) => {
      console.log(`database error ${error}`)
    })

  App.listen(PORT, () => console.log(`Server is running at ${PORT}`))
})()
