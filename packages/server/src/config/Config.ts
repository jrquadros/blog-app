import * as dotenv from 'dotenv'

dotenv.config()

export const Config = {
  port: process.env.PORT,
  mongoose: {
    url: process.env.MONGODB_URL,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
}
