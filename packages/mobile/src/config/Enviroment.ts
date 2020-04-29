import dotenv from 'dotenv'

dotenv.config()

export const Enviroment = {
  authServerUrl: process.env.AUTH_SERVER_URL,
}
