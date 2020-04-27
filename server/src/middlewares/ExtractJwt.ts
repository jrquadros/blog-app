import * as jwt from 'jsonwebtoken'
import { User } from '../Schemas/User'
import { Request, Response, NextFunction, RequestHandler } from 'express'

export const extractJWTMiddleware = (): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const authorization: string = req.get('authorization')
    const token = authorization ? authorization.split(' ')[1] : undefined

    req['context'] = {}
    req['context']['authorization'] = authorization

    if (!token) return next()

    // TODO get .env
    jwt.verify(token, 'secret', (err, decoded: any) => {
      if (err) return next()

      User.findById(decoded.sub).then((user) => {
        if (user) {
          req['context']['authUser'] = {
            id: user.id,
            email: user.email,
          }
        }

        return next()
      })
    })
  }
}
