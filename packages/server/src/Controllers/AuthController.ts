import { Response } from 'express'
import { User, IUserSchema } from '../Schemas/User'
import { IUserRequest } from '../middlewares/ExtractJwt'

export const AuthController = {
  async store(req: IUserRequest<IUserSchema>, res: Response) {
    const user = await User.create(req.body).catch((error) => {
      res.send(error)
    })
    return res.json(user)
  },

  async authenticate(req: IUserRequest<IUserSchema>, res: Response) {
    try {
      const { email, password } = req.body

      const user = await User.findOne({ email })

      if (!user) {
        return res.status(400).json({ error: 'User not found' })
      }

      if (!(await user.compareHash(password, email))) {
        return res.status(401).send('error: Invalid password')
      }

      const token = user.generateToken(user.id)

      return res.json({
        user: user,
        token: token,
      })
    } catch (err) {
      return res.status(400).send(err)
    }
  },

  async currentUser(req: IUserRequest<IUserSchema>, res: Response) {
    try {
      const userId = req.cookies.authUser

      const user = await User.findById(userId)

      return res.json({ authUser: user })
    } catch (error) {
      return res.status(400).json({ error: "Can't get user information" })
    }
  },
}
