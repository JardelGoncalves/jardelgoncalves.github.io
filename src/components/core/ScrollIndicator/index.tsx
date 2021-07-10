import { useEffect, useRef, useState } from 'react'
import * as S from './styles'

interface ScrollIndicatorProps {
  position?: 'absolute' | 'fixed' | 'relative'
  topDistance?: number
  distanceToVisible?: number
}

export const ScrollIndicator = ({
  position,
  topDistance,
  distanceToVisible
}: ScrollIndicatorProps) => {
  const progressRef = useRef<HTMLDivElement>(null)
  const [distance, setDistance] = useState(0)
  useEffect(() => {
    if (progressRef.current) {
      const content = document.querySelector('#content-page')
      if (content) {
        content.addEventListener('scroll', () => {
          const winScroll = content.scrollTop
          const height = content.scrollHeight - content.clientHeight

          const scrolled = (winScroll / height) * 100
          setDistance(scrolled)
          if (progressRef.current?.style) {
            progressRef.current.style.width = `${scrolled}%`
          }
        })
      }
    }
  }, [])
  return (
    <S.ProgressContainer
      isVisible={distanceToVisible ? distance >= distanceToVisible : true}
      position={position}
      topDistance={topDistance}
    >
      <S.Progress ref={progressRef} />
    </S.ProgressContainer>
  )
}
