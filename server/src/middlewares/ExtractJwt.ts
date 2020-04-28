import * as jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
import { Config } from '../config/Config'
import { IUserSchema } from '../Schemas/User'
import { get } from 'lodash'

export interface IUserRequest<T> extends Request {
  userId: string | undefined
  body: T
}

export const ExtractJWT = async (req: IUserRequest<IUserSchema>, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization
  if (!authHeader) {
    return res.status(401).send({ error: 'No token provided' })
  }

  const [scheme, token] = authHeader.split(' ')
  req['context'] = {}

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).send({ error: 'token malformatted' })
  }

  jwt.verify(token, Config.jwt.secret || '', (err, decoded) => {
    if (err) return res.status(401).send({ error: 'invalid token' })

    res.status(200).cookie('authUser', get(decoded, 'id'))

    return next()
  })
}
