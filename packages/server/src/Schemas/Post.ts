import { Schema, Document, model } from 'mongoose'
import * as mongoosePaginate from 'mongoose-paginate'
import { IUserSchema } from './User'

export interface IPostSchema extends Document {
  title: string
  description: string
  isDone: boolean
  author: IUserSchema
}

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  content: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

PostSchema.plugin(mongoosePaginate)

export const Post = model<IPostSchema>('Post', PostSchema)
