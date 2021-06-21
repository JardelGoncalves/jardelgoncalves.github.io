import * as S from './styles'

interface RaisedButtonProps {
  label: string
  type?: 'button' | 'reset' | 'submit'
  width?: number
  bg?: string
  block?: boolean
  disabled?: boolean
}

export const RaisedButton = ({
  label,
  type,
  width,
  bg,
  block,
  disabled
}: RaisedButtonProps) => {
  return (
    <S.Wrapper
      type={type || 'button'}
      bg={bg}
      block={block}
      disabled={!!disabled}
      width={width}
    >
      {label}
    </S.Wrapper>
  )
}
