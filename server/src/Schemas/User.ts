import { Schema, Document, model } from 'mongoose'
import * as bcrypt from 'bcrypt'

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

export interface IUserSchema extends Document {
  id: string
  username: string
  email: string
  password: string
  posts?: Schema.Types.ObjectId[]
}

UserSchema.pre<IUserSchema>('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 10)
  this.password = hash
  next()
})

export const User = model<IUserSchema>('User', UserSchema)
