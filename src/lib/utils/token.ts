/* eslint-disable @typescript-eslint/ban-types */
import JWT from 'jsonwebtoken'

export class Token {
  static async encode(data: object) {
    return JWT.sign(data, process.env.SECURITY_KEY as string, {
      expiresIn: process.env.EXPIRES_IN
    })
  }

  static async decode<T>(token: string): Promise<T> {
    return JWT.decode(token) as T
  }
}
