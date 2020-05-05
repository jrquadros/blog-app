import * as dotenv from 'dotenv'

dotenv.config()

export const Config = {
  port: process.env.PORT,
  cors: {
    webOrigin: process.env.WEBAPP_ORIGIN
  },
  mongoose: {
    url: process.env.MONGODB_URL,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
}
