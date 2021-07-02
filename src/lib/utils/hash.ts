import bcrypt from 'bcrypt'

export class Hash {
  static async generate(text: string, rounds = 10) {
    return bcrypt.hashSync(text, rounds)
  }

  static async compare(text: string, encrypted: string) {
    return bcrypt.compareSync(text, encrypted)
  }
}
