import { Icon } from '../Icon'
import * as S from './styles'

interface TitleProps {
  text: string
  weight?: string
  size?: string
  color?: string
  heading?: string
  anchorId?: string
}

export const Title = ({
  text,
  anchorId,
  heading,
  size,
  weight,
  color
}: TitleProps) => {
  return (
    <S.TitleWrapper
      size={size}
      weight={weight}
      color={color}
      as={heading || 'h1'}
    >
      {text}
      {anchorId && (
        <a href={`#${anchorId}`}>
          <Icon name="link" />
        </a>
      )}
    </S.TitleWrapper>
  )
}
