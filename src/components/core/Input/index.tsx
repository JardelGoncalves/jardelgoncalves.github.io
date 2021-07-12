import React from 'react'

import * as S from './styles'

interface InputProps {
  label?: string
  type?: string
  value?: string
  name?: string
  error?: string
  placeholder?: string
  width?: number
  ChangeHandler?: () => void
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, width, error, ...props }, ref) => {
    const errorId = `${props.name}_error`
    return (
      <S.Wrapper width={width}>
        {label && <S.Label>{label}</S.Label>}
        <S.Input ref={ref} {...props} aria-describedby={errorId} />
        {error && <S.MessageError id={errorId}>{error}</S.MessageError>}
      </S.Wrapper>
    )
  }
)

Input.displayName = 'Input'
export { Input }
