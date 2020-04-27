import * as jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
import { Config } from '../config/Config'

export const ExtractJWT = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization
  if (!authHeader) {
    return res.status(401).send({ error: 'No token provided' })
  }

  const [scheme, token] = authHeader.split(' ')

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).send({ error: 'token malformatted' })
  }

  jwt.verify(token, Config.jwt.secret || '', (err, decoded) => {
    if (err) return res.status(401).send({ error: 'invalid token' })

    // @ts-ignore
    req.userId = decoded.id
    return next()
  })
}
