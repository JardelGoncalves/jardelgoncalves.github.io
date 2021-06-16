import Link from 'next/link'
import * as S from './styles'

interface TagProps {
  to: string
  label: string
  background?: string | undefined
}

export const Tag = ({ to, label, background }: TagProps) => {
  return (
    <Link href={to}>
      <S.Wrapper background={background}>{label}</S.Wrapper>
    </Link>
  )
}
