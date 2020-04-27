import { User, IUserSchema } from '../Schemas/User'
import { Request, Response } from 'express'

interface IUserRequest<T> extends Request {
  body: T
}

export const UserController = {
  async index(req: Request, res: Response) {
    const users = await User.find().catch((error) => {
      res.send(error)
    })
    return res.json(users)
  },

  // async postsByUser(req: Request, res: Response) {
  //   const id = req.params

  //   const user = await User.findById(id).populate('posts')

  //   return res.json(user?.posts)
  // },

  async show(req: IUserRequest<IUserSchema>, res: Response) {
    const user = await User.findById(req.params.id).catch((error) => {
      res.send(error)
    })
    return res.json(user)
  },

  async update(req: IUserRequest<IUserSchema>, res: Response) {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }).catch(
      (error) => {
        res.send(error)
      }
    )
    return res.json(user)
  },

  async destroy(req: Request, res: Response) {
    await User.findByIdAndRemove(req.params.id).catch((error) => {
      res.send(error)
    })
    return res.send()
  },
}
