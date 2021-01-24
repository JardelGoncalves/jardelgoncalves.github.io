import * as themes from '../theme';
export const setTheme = (theme) => {
  const themeSelected =  themes[theme] || themes.light;
  console.log(themeSelected)

  for(const key in themeSelected) {
    document.body.style.setProperty(key, themeSelected[key]);
  }
}