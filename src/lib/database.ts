import mongoose, { Mongoose } from 'mongoose'

export const connect = async (): Promise<Mongoose> => {
  return mongoose.connect(process.env.MONGO_URL as string, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}
