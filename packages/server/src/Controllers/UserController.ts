import { User, IUserSchema } from '../Schemas/User'
import { Request, Response } from 'express'
import { IUserRequest } from '../middlewares/ExtractJwt'

export const UserController = {
  async index(req: Request, res: Response) {
    try {
      const users = await User.find().catch((error) => {
        res.send(error)
      })
      return res.json(users)
    } catch (error) {
      res.status(400).send(error)
    }
  },

  async show(req: IUserRequest<IUserSchema>, res: Response) {
    try {
      const user = await User.findById(req.params.id).catch((error) => {
        res.send(error)
      })
      return res.json(user)
    } catch (error) {
      res.status(400).send(error)
    }
  },

  async update(req: IUserRequest<IUserSchema>, res: Response) {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }).catch(
        (error) => {
          res.send(error)
        }
      )
      return res.json(user)
    } catch (error) {
      res.status(400).send(error)
    }
  },

  async destroy(req: Request, res: Response) {
    try {
      await User.findByIdAndRemove(req.params.id).catch((error) => {
        res.send(error)
      })
      return res.send()
    } catch (error) {
      res.status(400).send(error)
    }
  },
}
