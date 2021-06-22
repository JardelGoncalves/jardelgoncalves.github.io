import React from 'react'

import * as S from './styles'

interface InputProps {
  label?: string
  type?: string
  value?: string
  name?: string
  placeholder?: string
  width?: number
  ChangeHandler?: () => void
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, width, ...props }, ref) => (
    <S.Wrapper width={width}>
      {label && <S.Label>{label}</S.Label>}
      <S.Input ref={ref} {...props} />
    </S.Wrapper>
  )
)

Input.displayName = 'Input'
export { Input }
