import { MongoClient } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'
import { NextFunction } from 'express'

import * as database from '../database'

type Conn = {
  client?: MongoClient
}

const conn: Conn = {}

export const connection = async (
  req: NextApiRequest,
  _res: NextApiResponse,
  next: NextFunction
) => {
  if (!conn.client) {
    const client = await database.connect()
    conn.client = client
  }
  req.dbClient = conn.client
  req.db = conn.client.db(process.env.DB_NAME as string)
  return next()
}
