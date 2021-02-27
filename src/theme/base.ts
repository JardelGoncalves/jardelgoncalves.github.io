export interface Colors {
  [key: string]: string
}

export const base = (colors?: Colors): Colors => ({
  '--bg-color': '#FAFAFA',
  '--text-color': '#050505',
  '--gradient-from': '#f59c16',
  '--gradient-to': '#eb0774',
  ...(colors || {})
})
