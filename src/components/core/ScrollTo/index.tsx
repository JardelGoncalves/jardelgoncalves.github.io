import * as S from './styles'

interface ScrollToProps {
  anchorId: string
}

export const ScrollTo = ({ anchorId }: ScrollToProps) => {
  return (
    <S.Wrapper href={`#${anchorId}`} className="scroll-to-anchor">
      <S.ArrowToDown />
    </S.Wrapper>
  )
}
