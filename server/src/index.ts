import { App } from './App'

const PORT = 8080

;(async function start() {
  App.listen(PORT, () => console.log(`Server is running at ${PORT}`))
})()
