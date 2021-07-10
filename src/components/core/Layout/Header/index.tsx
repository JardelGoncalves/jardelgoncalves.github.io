import * as S from './styles'

interface HeaderProps {
  children: React.ReactNode
  full?: boolean | undefined
  hasSide?: boolean | undefined
}

export const Header = ({ children, hasSide, full }: HeaderProps) => {
  return (
    <S.Wrapper hasSide={hasSide}>
      <S.WrapperHeader hasSide={hasSide} full={full}>
        {children}
      </S.WrapperHeader>
    </S.Wrapper>
  )
}
