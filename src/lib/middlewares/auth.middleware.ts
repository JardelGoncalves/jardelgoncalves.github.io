import { NextApiRequest, NextApiResponse } from 'next'
import { NextFunction } from 'express'
import { ApiError } from '../utils/error/api-error'
import { Token } from 'lib/utils/token'
import { InternalError } from '../utils/error/internal-error'
import { ObjectId } from 'mongodb'

type TokenData = {
  id: string
}

export const authMiddleware = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextFunction
) => {
  const token = req.headers['x-access-token']
  try {
    if (!token) throw new InternalError('token not provided!', 401)

    const decoded = await Token.decode<TokenData>(token as string)
    if (!decoded) throw new InternalError('token invalid!', 401)

    const user = await req.db
      ?.collection('users')
      .findOne({ _id: new ObjectId(decoded.id) })

    if (!user) throw new InternalError('token invalid!', 401)
  } catch (error) {
    return res.status(401).send(
      ApiError.format({
        message: (error as Error).message,
        code: 401
      })
    )
  }
  return next()
}
