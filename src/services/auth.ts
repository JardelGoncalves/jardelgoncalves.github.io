import { AxiosError } from 'axios'
import { api } from './api'
import { Notification } from '../utils/notification'
import { setCookie } from 'nookies'
import { MAX_AGE_COOKIES, TOKEN, USER_LOGGED } from '../utils/constants/cookies'

type CredentialsData = {
  email: string
  password: string
}
export class AuthService {
  static async signIn(credentials: CredentialsData) {
    try {
      const { data } = await api.post('/auth', credentials)
      setCookie(undefined, TOKEN, data.token, { maxAge: MAX_AGE_COOKIES })
      setCookie(undefined, USER_LOGGED, JSON.stringify(data.user), {
        maxAge: MAX_AGE_COOKIES
      })
      Notification.success('Login realizado com sucesso!')
    } catch (e) {
      const error = e as AxiosError
      if (error.response) {
        Notification.error(error.response.data.message)
        return
      }
      Notification.error('Ocorreu um erro interno!')
    }
  }
}
