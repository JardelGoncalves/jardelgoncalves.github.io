import { nanoid } from 'nanoid'
import * as S from './styles'
import React, { useRef, useEffect } from 'react'

interface Interaction {
  id: string
  amount: string
  image: {
    alt: string
    name: string
  }
}

interface InteractionStatisticsProps {
  interactions: Interaction[]
  onInteraction: (interaction: Interaction) => void
}

const IMAGE_PATH = '/images/'

export const InteractionStatistics = ({
  interactions,
  onInteraction
}: InteractionStatisticsProps) => {
  const itemsRef = useRef(
    Array.from({ length: interactions.length }, () =>
      React.createRef<HTMLButtonElement>()
    )
  )

  useEffect(() => {
    if (itemsRef.current && itemsRef.current.length) {
      itemsRef.current.forEach((element) => {
        if (element.current) {
          element.current.addEventListener('click', function () {
            setTimeout(() => {
              this.classList.remove('--add-one')
            }, 1)
            setTimeout(() => {
              this.classList.add('--add-one')
            }, 20)
          })
        }
      })
    }
  }, [])

  return (
    <S.Wrapper>
      {interactions.map((interaction, i) => (
        <S.Item
          key={nanoid()}
          ref={itemsRef.current[i]}
          onClick={() => onInteraction(interaction)}
        >
          <img
            src={`${IMAGE_PATH}${interaction.image.name}`}
            alt={interaction.image.alt}
          />
          <span>{interaction.amount}</span>
        </S.Item>
      ))}
    </S.Wrapper>
  )
}
