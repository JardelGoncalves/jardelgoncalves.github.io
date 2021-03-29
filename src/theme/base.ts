export interface Colors {
  [key: string]: string
}

export const base = (colors?: Colors): Colors => ({
  '--white': '#FFFFFF',
  '--primary-color': '#495FEF',
  '--secondary-color': '#56B381',
  '--bg-color': '#FAFAFA',
  '--text-color': '#161C2D',
  '--gradient-from': '#F59C16',
  '--gradient-to': '#EB0774',
  '--border-color': '#EAEAEA',
  '--slider-bg-color': '#616469',
  '--menu-color': '#616469',
  '--switch-mode-border': 'rgba(97, 100, 105, 0.2)',
  '--switch-mode-bg': 'transparent',
  ...(colors || {})
})
