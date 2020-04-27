import * as jwt from 'jsonwebtoken'
import { Request } from 'express'
// @ts-ignore
const promisify = require('util')

export const ExtractJWT = async (req: Request, res, next) => {
  const authHeader = req.headers.authorization
  console.log(authHeader)
  if (!authHeader) {
    return res.status(401).send({ error: 'No token provided' })
  }

  // @ts-ignore
  const [scheme, token] = authHeader.split(' ')

  try {
    const decoded = await promisify(jwt.verify)(token, 'secret')
    // @ts-ignore
    req.userId = decoded.id
  } catch (err) {
    return res.status(401).send({ error: 'Token invalid' })
  }
}
