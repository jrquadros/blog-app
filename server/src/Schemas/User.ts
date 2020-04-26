import { Schema, Document, model, Types, Model } from 'mongoose'
import { ITodoSchema } from './Todo'

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    select: false,
    required: true,
  },
  todos: [
    {
      type: String,
    },
  ],
  createdAt: {
    type: Date,
    required: false,
  },
})

export interface IUserSchema extends Document {
  username: string
  email: string
  password: string
  todos?: ITodoSchema[]
}

export const User = model<IUserSchema>('User', UserSchema)
