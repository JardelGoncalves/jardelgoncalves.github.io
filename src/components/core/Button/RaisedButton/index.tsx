import * as S from './styles'
import { LoadingEllipsis } from '../../Loading/LoadingEllipsis/index'

interface RaisedButtonProps {
  label: string
  type?: 'button' | 'reset' | 'submit'
  width?: number
  bg?: string
  block?: boolean
  disabled?: boolean
  loading?: boolean
}

export const RaisedButton = ({
  label,
  type,
  width,
  bg,
  block,
  disabled,
  loading
}: RaisedButtonProps) => {
  return (
    <S.Wrapper
      type={type || 'button'}
      bg={bg}
      block={block}
      disabled={!!disabled || !!loading}
      width={width}
    >
      {!loading && label}
      {loading && <LoadingEllipsis size={6} />}
    </S.Wrapper>
  )
}
