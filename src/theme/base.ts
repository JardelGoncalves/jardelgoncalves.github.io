export interface Colors {
  [key: string]: string
}

export const base = (colors?: Colors): Colors => ({
  '--white': '#FFFFFF',
  '--bg-color': '#FAFAFA',
  '--text-color': '#050505',
  '--gradient-from': '#F59C16',
  '--gradient-to': '#EB0774',
  '--border-color': '#EAEAEA',
  '--slider-bg-color': '#616469',
  ...(colors || {})
})
