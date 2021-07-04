import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'

import { all } from 'lib/middlewares'
import { authValidator } from 'lib/schema/auth.schema'
import { Token } from 'lib/utils/token'
import { Hash } from 'lib/utils/hash'

const handler = nc()
handler.use(all)

handler.post<NextApiRequest, NextApiResponse>(async (req, res) => {
  try {
    await authValidator.validate(req.body)
    const { email, password } = req.body

    const user = await req.db?.collection('users').findOne({ email })

    if (!user) {
      return res.status(401).json({
        message: 'Email or password invalid!',
        code: 401,
        error: 'UNAUTHORIZED'
      })
    }

    const matchPassowrd = await Hash.compare(password, user.password)
    if (!matchPassowrd) {
      return res.status(401).json({
        message: 'Email or password invalid!',
        code: 401,
        error: 'UNAUTHORIZED'
      })
    }

    const token = await Token.encode({ id: user._id })

    return res.json({
      user,
      token
    })
  } catch (error) {
    console.log(error)
    return res.status(401).json({
      message: 'Email or password invalid!',
      code: 401,
      error: 'UNAUTHORIZED'
    })
  }
})

export default handler
