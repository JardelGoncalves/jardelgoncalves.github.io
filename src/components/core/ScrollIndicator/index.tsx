import { useEffect, useRef } from 'react'
import * as S from './styles'

interface ScrollIndicatorProps {
  position?: 'absolute' | 'fixed' | 'relative'
  topDistance?: number
  isVisible?: boolean
}

export const ScrollIndicator = ({
  position,
  topDistance,
  isVisible
}: ScrollIndicatorProps) => {
  const progressRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (progressRef.current) {
      window.onscroll = function () {
        const winScroll =
          document.body.scrollTop || document.documentElement.scrollTop
        const height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight
        const scrolled = (winScroll / height) * 100
        if (progressRef.current?.style) {
          progressRef.current.style.width = `${scrolled}%`
        }
      }
    }
  }, [])
  return (
    <S.ProgressContainer
      isVisible={isVisible}
      position={position}
      topDistance={topDistance}
    >
      <S.Progress ref={progressRef} />
    </S.ProgressContainer>
  )
}
