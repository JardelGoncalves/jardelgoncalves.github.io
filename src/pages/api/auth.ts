import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'

import { all } from 'lib/middlewares'
import { authValidator } from 'lib/schema/auth.schema'
import { Token } from 'lib/utils/token'
import { Hash } from 'lib/utils/hash'
import { InternalError } from 'lib/utils/error/internal-error'
import { ApiError } from 'lib/utils/error/api-error'

const handler = nc()
handler.use(all)

handler.post<NextApiRequest, NextApiResponse>(async (req, res) => {
  try {
    await authValidator.validate(req.body)
    const { email, password } = req.body

    const user = await req.db?.collection('users').findOne({ email })

    if (!user) throw new InternalError('Email or Password invalid!', 401)

    const matchPassowrd = await Hash.compare(password, user.password)
    if (!matchPassowrd)
      throw new InternalError('Email or Password invalid!', 401)

    const token = await Token.encode({ id: user._id })

    return res.json({
      user,
      token
    })
  } catch (error) {
    return ApiError.handler(res, error as Error)
  }
})

export default handler
