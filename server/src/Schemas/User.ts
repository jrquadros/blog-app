import { Schema, Document, model } from 'mongoose'

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
  },
})

export interface IUserSchema extends Document {
  id: string
  username: string
  email: string
  password: string
  posts?: Schema.Types.ObjectId[]
}

export const User = model<IUserSchema>('User', UserSchema)
