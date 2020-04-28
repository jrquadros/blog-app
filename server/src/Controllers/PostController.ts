import { Post, IPostSchema } from '../Schemas/Post'
import { User } from '../Schemas/User'
import { Request, Response } from 'express'
import { IUserRequest } from '../middlewares/ExtractJwt'

export const PostController = {
  async index(req: Request, res: Response) {
    const posts = await Post.find().catch((error) => {
      res.send(error)
    })
    return res.json(posts)
  },

  async show(req: IUserRequest<IPostSchema>, res: Response) {
    const post = await Post.findById(req.params.id).catch((error) => {
      res.send(error)
    })
    return res.json(post)
  },

  async update(req: IUserRequest<IPostSchema>, res: Response) {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true }).catch((error) => {
      res.send(error)
    })
    return res.json(post)
  },

  //TODO get user id from
  async store(req: IUserRequest<IPostSchema>, res: Response) {
    const post = await Post.create(req.body).then((post) => {
      return User.findByIdAndUpdate(
        req.params.id,
        {
          $push: {
            posts: post.id,
          },
        },
        { new: true },
      )
    })
    return res.send(post)
  },

  async destroy(req: Request, res: Response) {
    await Post.findByIdAndRemove(req.params.id).catch((error) => {
      res.send(error)
    })
    return res.send()
  },
}
