export interface Colors {
  [key: string]: string
}

export const base = (colors?: Colors): Colors => ({
  white: '#FFFFFF',
  grayscale50: '#F4F4F5',
  grayscale100: '#E8E8E8',
  grayscale200: '#DBDDE0',
  grayscale300: '#CACCCF',
  grayscale400: '#A0A4A8',
  grayscale500: '#52575C',
  grayscale900: '#25282B',
  primary50: '#E5F2FF',
  primary100: '#CCE5FF',
  primary200: '#B3D8FF',
  primary300: '#99CBFF',
  primary400: '#80BFFF',
  primary500: '#66B2FF',
  primary600: '#4DA5FF',
  primary700: '#3398FF',
  primary800: '#1A8BFF',
  primary900: '#007EFF',
  warning500: '#FFBC1F',
  warning700: '#F6A609',
  warning900: '#E89806',
  success500: '#40DD7F',
  success700: '#2AC769',
  success900: '#1AB759',
  negative500: '#FF6262',
  negative700: '#FB4E4E',
  negative900: '#E93C3C',

  bgColor: '#FAFAFA',
  textColor: '#25282B',
  textGradientFrom: '#FB4E4E',
  textGradientTo: '#2AC769',
  borderColor: '#E8E8E8',
  sliderBgColor: '#52575C',
  menuTextColor: '#52575C',
  switchModeBorder: 'rgba(97, 100, 105, 0.2)',
  switchModeBg: 'transparent',
  gradientFontColorize:
    '45deg, #007EFF 0%, #007EFF 7.14%, #2AC769 14.28%, #2AC769 21.42%, #2AC769 28.56%, #FB4E4E 35.7%, #FB4E4E 42.84%, #007EFF 50%',
  gradientEnterprise: '90deg, #9796f0 0%, #fbc7d4 100%',
  ...(colors || {})
})
