import axios from 'axios'
import { NextPageContext, NextApiRequest } from 'next'
import { Request } from 'express'
import { parseCookies } from 'nookies'

import { TOKEN } from '../utils/constants/cookies'
import { BASE_API } from '../utils/constants/url'

export const createClient = (
  ctx?:
    | Pick<NextPageContext, 'req'>
    | {
        req: NextApiRequest
      }
    | {
        req: Request
      }
    | null
    | undefined
) => {
  const { [TOKEN]: token } = parseCookies(ctx)
  const api = axios.create({
    baseURL: BASE_API
  })

  if (token) {
    api.defaults.headers['x-access-token'] = token
  }
  return api
}

export const api = createClient()
