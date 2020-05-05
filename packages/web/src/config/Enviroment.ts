import * as dotenv from 'dotenv'

dotenv.config()

export const Enviroment = {
  authServerUri: process.env.REACT_APP_AUTH_SERVER_URI,
  apiServerUri: process.env.REACT_APP_API_URI,
}
