import { Hash } from 'lib/utils/hash'
import mongoose, { Schema, Document } from 'mongoose'

export interface User {
  _id?: string
  name: string
  email: string
  password: string
}

export enum CUSTOM_VALIDATION {
  DUPLICATED = 'DUPLICATED',
}

export interface UserModel extends Omit<User, '_id'>, Document { }

const schema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: [true, 'Email must be unique']
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    toJSON: {
      transform: (_, doc): void => {
        doc.id = doc._id
        delete doc._id
        delete doc.__v
      }
    }
  }
)

schema.path('email').validate(
  async (email: string) => {
    const emailCount = await mongoose.models.User.countDocuments({ email })
    return !emailCount
  },
  'already exists in the database.',
  CUSTOM_VALIDATION.DUPLICATED
)

schema.pre<UserModel>('save', async function (): Promise<void> {
  if (!this.password || !this.isModified('password')) return
  const hashedPassword = await Hash.generate(this.password)
  this.password = hashedPassword
})

export const User = mongoose.model<UserModel>('User', schema)
