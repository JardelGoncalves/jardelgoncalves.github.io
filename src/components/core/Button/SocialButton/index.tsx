import { Icon } from 'components/core/Icon'

import * as S from './styles'

interface ISocialButton {
  icon: string
  iconSize?: number
  url: string
  target?: string
}

export const SocialButton = ({
  icon,
  url,
  iconSize = 24,
  target
}: ISocialButton) => {
  return (
    <S.Wrapper href={url} target={target || ''}>
      <Icon name={icon} size={iconSize} />
    </S.Wrapper>
  )
}
