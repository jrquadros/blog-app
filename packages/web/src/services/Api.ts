import axios from 'axios'
import { Enviroment } from '../config/Enviroment'

export interface Ipost {
  _id: string
  title: string
  author: string
  createdAt: string
  description: string
}

export const Api = axios.create({
  baseURL: `${Enviroment.apiServerUri}/v1`,
})
