import { NextApiRequest, NextApiResponse } from 'next'
import { NextFunction } from 'express'

import * as database from '../database'
global.mongo = global.mongo || {}

export const connection = async (
  _: NextApiRequest,
  _res: NextApiResponse,
  next: NextFunction
) => {
  if (!global.mongo.isConnected) {
    const db = await database.connect()
    global.mongo.isConnected = db.connections[0].readyState;
  }
  return next()
}
