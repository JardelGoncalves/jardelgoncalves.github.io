import { NextApiRequest, NextApiResponse } from 'next'
import { NextFunction } from 'express'

import * as database from '../database'
global.mongo = global.mongo || null

export const connection = async (
  _: NextApiRequest,
  _res: NextApiResponse,
  next: NextFunction
) => {
  if (!global.mongo) {
    global.mongo = await database.connect()
  }
  return next()
}
