import axios, { AxiosResponse } from 'axios'
import { Enviroment } from '../config/Enviroment'

interface IResponse {
  token: string
}

export const Auth = axios.create({
  baseURL: Enviroment.authServerUri,
})

export const Login = async (username: string, password: string) => {
  const result: AxiosResponse<IResponse> = await Auth.post(
    '/login',
    JSON.stringify({ username, password }),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  const token = result.data.token
  return token
}
