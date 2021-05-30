export class Cache {
  private static isClient() {
    return typeof window !== 'undefined'
  }

  static get(key: string) {
    if (Cache.isClient()) return localStorage.getItem(key)
    return null
  }

  static set(key: string, value: string) {
    if (Cache.isClient()) localStorage.setItem(key, value)
    return null
  }

  static remove(key: string) {
    if (Cache.isClient()) localStorage.removeItem(key)
  }

  static has(key: string) {
    return !!Cache.get(key)
  }
}
