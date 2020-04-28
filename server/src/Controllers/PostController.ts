import { Post, IPostSchema } from '../Schemas/Post'
import { User } from '../Schemas/User'
import { Request, Response } from 'express'
import { IUserRequest } from '../middlewares/ExtractJwt'

export const PostController = {
  async index(req: Request, res: Response) {
    try {
      const posts = await Post.find().catch((error) => {
        res.send(error)
      })
      return res.json(posts)
    } catch (error) {
      res.status(400).send(error)
    }
  },

  async show(req: IUserRequest<IPostSchema>, res: Response) {
    const post = await Post.findById(req.params.id).catch((error) => {
      res.send(error)
    })
    return res.json(post)
  },

  async update(req: IUserRequest<IPostSchema>, res: Response) {
    try {
      const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true }).catch((error) => {
        res.send(error)
      })
      return res.json(post)
    } catch (error) {
      res.status(400).send(error)
    }
  },

  //TODO get user id from
  async store(req: IUserRequest<IPostSchema>, res: Response) {
    try {
      const { userId } = req.cookies

      req.body.author = userId
      const post = await Post.create(req.body).then((post) => {
        return User.findByIdAndUpdate(
          userId,
          {
            $push: {
              posts: post.id,
            },
          },
          { new: true },
        )
      })
      return res.send(post)
    } catch (error) {
      res.status(400).send(error)
    }
  },

  async destroy(req: Request, res: Response) {
    try {
      await Post.findByIdAndRemove(req.params.id).catch((error) => {
        res.send(error)
      })
      return res.send()
    } catch (error) {
      res.status(400).send(error)
    }
  },
}
