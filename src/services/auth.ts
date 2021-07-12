import { AxiosError } from 'axios'
import { api } from './api'
import { Notification } from '../utils/notification'
import { destroyCookie, setCookie, parseCookies } from 'nookies'
import { MAX_AGE_COOKIES, TOKEN, USER_LOGGED } from '../utils/constants/cookies'
import { User } from '../interfaces/user'

type CredentialsData = {
  email: string
  password: string
}

type SignInResponse = {
  data: User | null
  success: boolean
}

export class AuthService {
  static async signIn(credentials: CredentialsData) {
    const result: SignInResponse = {
      data: null,
      success: false
    }
    try {
      const { data } = await api.post('/auth', credentials)
      setCookie(undefined, TOKEN, data.token, { maxAge: MAX_AGE_COOKIES })
      setCookie(undefined, USER_LOGGED, JSON.stringify(data.user), {
        maxAge: MAX_AGE_COOKIES
      })
      api.defaults.headers['x-accesss-token'] = data.token

      result.data = data.user
      result.success = true

      Notification.success('Login realizado com sucesso!')
    } catch (e) {
      const error = e as AxiosError
      if (error.response) {
        Notification.error(error.response.data.message)
        return
      }
      result.data = null
      result.success = false

      Notification.error('Ocorreu um erro interno!')
    }
    return result
  }
  static logout() {
    destroyCookie(null, TOKEN)
    destroyCookie(null, USER_LOGGED)
  }

  static recoveryUser() {
    const { [USER_LOGGED]: user } = parseCookies()
    return user ? (JSON.parse(user) as User) : null
  }
}
