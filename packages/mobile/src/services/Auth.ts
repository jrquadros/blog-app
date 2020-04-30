import axios from 'axios'
import { Enviroment } from '../config/Enviroment'

export const Auth = axios.create({
  baseURL: Enviroment.authServerUrl,
})
