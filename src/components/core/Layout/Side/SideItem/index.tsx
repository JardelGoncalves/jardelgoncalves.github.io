import * as S from './styles'
import { Icon } from '../../../Icon/index'

interface SideItemProps {
  text?: string
  minus?: boolean
  icon?: string
  customIcon?: {
    scale?: number
  }
  noHover?: boolean
}

export const SideItem = ({
  minus,
  text,
  icon,
  customIcon,
  noHover
}: SideItemProps) => {
  return (
    <S.Wrapper minus={minus || !text} noHover={noHover}>
      {icon && (
        <div className="--minus">
          <Icon name={icon} scale={customIcon?.scale} />
        </div>
      )}
      {!minus && text && <span className="--text">{text}</span>}
    </S.Wrapper>
  )
}
