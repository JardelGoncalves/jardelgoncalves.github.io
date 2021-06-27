import { useEffect } from 'react'

export const useSmooth = () => {
  useEffect(() => {
    const path = window.location.hash
    if (path && path.includes('#')) {
      setTimeout(() => {
        const id = path.replace('#', '')
        const el = window.document.getElementById(id)
        if (el) {
          window.top.scroll({
            top: (el as HTMLElement).getBoundingClientRect().top - 100,
            behavior: 'smooth'
          })
        }
      }, 200)
    }
  }, [])
}
