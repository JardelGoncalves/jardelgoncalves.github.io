export const base = (theme) => ({
  '--white': '#ffffff',
  '--black': '#000000',
  ...(theme || {}),
})