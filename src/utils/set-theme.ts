import { Colors } from '../theme/base'
import * as themes from '../theme'

export enum THEME {
  LIGHT = 'light',
  DARK = 'dark'
}

export function setTheme(keyTheme: THEME): void {
  const colors: Colors = themes[keyTheme] || themes.light
  for (const key in colors) {
    if (Object.prototype.hasOwnProperty.call(colors, key)) {
      console.log(key)
      document.body.style.setProperty(key, colors[key])
    }
  }
}
