import httpStatusCodes from 'http-status-codes'
import { NextApiResponse } from 'next'
import { ValidationError } from 'yup'

import { InternalError } from './internal-error'

export interface APIError {
  message: string
  code: number
  codeAsString?: string
  description?: string
  documentation?: string
}

export interface APIErrorResponse extends Omit<APIError, 'codeAsString'> {
  error: string
}

export class ApiError {
  static format(error: APIError) {
    return {
      ...{
        message: error.message,
        code: error.code,
        error: error?.codeAsString ?? httpStatusCodes.getStatusText(error.code)
      },
      ...(error.description && { description: error.description }),
      ...(error.documentation && { documentation: error.documentation })
    }
  }

  static handler(
    res: NextApiResponse,
    error: ValidationError | InternalError | Error
  ) {
    if (error instanceof ValidationError) {
      return res.status(400).send(
        ApiError.format({
          message: error.errors[0],
          code: 400
        })
      )
    }
    if (error instanceof InternalError) {
      return res.status(error.code).send(
        ApiError.format({
          message: error.message,
          code: error.code
        })
      )
    }

    return res.status(500).send(
      ApiError.format({
        message: 'Internal Error',
        code: 500
      })
    )
  }
}
