import { Schema, Document, model } from 'mongoose'
import { ITodoSchema } from './Todo'

const UserSchema = new Schema({
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
  todos: [
    {
      type: String,
      required: false,
    },
  ],
  createdAt: {
    type: Date,
    required: false,
  },
})

export interface IUserSchema extends Document {
  id: string
  username: string
  email: string
  password: string
  todos?: ITodoSchema[]
}

export const User = model<IUserSchema>('User', UserSchema)
