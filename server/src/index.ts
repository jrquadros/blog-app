import { App } from './App'
import * as dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.SERVER_PORT

;(async function start() {
  App.listen(PORT, () => console.log(`Server is running at ${PORT}`))
})()
