export interface Colors {
  [key: string]: string
}

export const base = (colors?: Colors): Colors => ({
  white: '#FFFFFF',
  primary: '#007EFF',
  secondary: '#FF0A78',
  tertiary: '#FFE100',
  warning: '#FFBC1F',
  positive: '#1AB759',
  negative: '#FB4E4E',
  background: '#FAFAFA',
  text: '#121214',
  description: '#52575C',
  border: '#E1E1E1',
  textMenu: '#52575C',
  toggleBackground: '#52575C',
  toggleBorder: '#616469',
  textInteraction: '#A0A4A8',
  placeholder: '#52575C',
  toggleBackgroundContainer: 'transparent',
  enterprise: '90deg, #7877d9 0%, #cf4e6f 100%',
  title: '#007EFF',
  subtitle: '#012245',
  bannerProject: '#f2f2f2',
  ...(colors || {})
})
