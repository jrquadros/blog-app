import axios from 'axios'
import { Enviroment } from '../config/Enviroment'

export const Api = axios.create({
  baseURL: `${Enviroment.apiServerUri}/v1`,
})
