import bcrypt from 'bcrypt'

export class Hash {
  static generate(text: string, rounds = 10) {
    return bcrypt.hashSync(text, rounds)
  }

  static compare(text: string, encrypted: string) {
    return bcrypt.compareSync(text, encrypted)
  }
}
