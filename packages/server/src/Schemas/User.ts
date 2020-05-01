import { Schema, Document, model } from 'mongoose'
import * as mongoosePaginate from 'mongoose-paginate'
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import { Config } from '../config/Config'

export interface IUserSchema extends Document {
  id: string
  username: string
  email: string
  password: string
  posts?: Schema.Types.ObjectId[]
  generateToken(id: string): string | undefined
  compareHash(password: string, email: string): Promise<boolean>
}

const UserSchema = new Schema<IUserSchema>({
  username: {
    type: String,
    required: true,
    lowercase: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    select: false,
    required: true,
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Post',
      required: false,
    },
  ],
  createdAt: {
    type: Date,
    required: false,
    default: Date.now,
  },
})

UserSchema.plugin(mongoosePaginate)

UserSchema.methods.generateToken = function (id: string) {
  return jwt.sign({ id }, Config.jwt.secret || '', { expiresIn: '1 days' })
}

UserSchema.methods.compareHash = async function (password, email) {
  try {
    const user = await User.findOne({ email: email }).select('+password')
    return bcrypt.compare(password, user?.password || '')
  } catch (error) {
    console.error(error.message)
    return false
  }
}

UserSchema.pre<IUserSchema>('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 10)
  this.password = hash
  next()
})

export const User = model<IUserSchema>('User', UserSchema)
