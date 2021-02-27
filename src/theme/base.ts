export interface Colors {
  [key: string]: string
}

export const base = (colors?: Colors): Colors => ({
  '--bg-color': '#FAFAFA',
  '--text-color': '#050505',
  ...(colors || {})
})
