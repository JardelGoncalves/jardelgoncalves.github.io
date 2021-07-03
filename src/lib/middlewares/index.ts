import nc from 'next-connect'
import { connection } from './connection-middleware'

const all = nc()
all.use(connection)

export { all }
