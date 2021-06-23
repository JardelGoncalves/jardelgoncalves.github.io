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
  text: '#0E141B',
  description: '#52575C',
  border: '#E8E8E8',
  textMenu: '#52575C',
  toggleBackground: '#0E141B',
  toggleBorder: '#616469',
  textInteraction: '#A0A4A8',
  placeholder: '#52575C',
  toggleBackgroundContainer: 'transparent',
  enterprise: '90deg, #7877d9 0%, #cf4e6f 100%',
  ...(colors || {})
})
