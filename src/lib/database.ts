import { MongoClient } from 'mongodb'

export const connect = async (): Promise<MongoClient> => {
  const client = new MongoClient(process.env.MONGO_URL as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  await client.connect()
  return client
}
