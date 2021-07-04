import { Db, MongoClient } from 'mongodb'

declare module 'next' {
  interface NextApiRequest {
    dbClient?: MongoClient
    db?: Db
  }
}
