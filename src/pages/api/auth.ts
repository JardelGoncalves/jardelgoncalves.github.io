import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'

const handler = nc()

handler.post<NextApiRequest, NextApiResponse>(async (req, res) => {
  const { email, password } = req.body
  return res.json({
    email: `${email}`.toUpperCase(),
    password: `${password}`.toUpperCase()
  })
})

export default handler
