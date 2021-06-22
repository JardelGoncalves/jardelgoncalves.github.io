import * as S from './styles'

interface LoadingEllipsisProps {
  size?: number
  color?: string
}

export const LoadingEllipsis = ({ size, color }: LoadingEllipsisProps) => {
  return (
    <S.EllipsisContainer size={size} color={color}>
      <div />
      <div />
      <div />
      <div />
    </S.EllipsisContainer>
  )
}
