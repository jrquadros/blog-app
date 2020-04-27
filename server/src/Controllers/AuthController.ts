import { Request, Response } from 'express'
import { User, IUserSchema } from '../Schemas/User'

interface IUserRequest<T> extends Request {
  body: T
}

export const AuthController = {
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

      return res.json({
        user: user,
        token: user.generateToken(user.id),
      })
    } catch (err) {
      console.log(err)
      return res.status(400).send(err)
    }
  },
}
