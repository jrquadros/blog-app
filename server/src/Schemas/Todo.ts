import { Schema, Document, model } from 'mongoose'
import { IUserSchema } from './User'

const TodoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  isDone: {
    type: Boolean,
    required: false,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
})

export interface ITodoSchema extends Document {
  title: string
  description: string
  isDone: boolean
  author: IUserSchema
}

export const Todo = model<ITodoSchema>('Todo', TodoSchema)
