import * as S from './styles'
import { Icon } from '../../../Icon/index'
import Link from 'next/link'

export interface SideItemProps {
  text?: string
  to?: string
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
  to,
  icon,
  customIcon,
  noHover
}: SideItemProps) => {
  return to ? (
    <Link href={to}>
      <S.Wrapper minus={minus || !text} noHover={noHover}>
        {icon && (
          <div className="--minus">
            <Icon name={icon} scale={customIcon?.scale} />
          </div>
        )}
        {!minus && text && <p className="--text">{text}</p>}
      </S.Wrapper>
    </Link>
  ) : (
    <S.Wrapper minus={minus || !text} noHover={noHover}>
      {icon && (
        <div className="--minus">
          <Icon name={icon} scale={customIcon?.scale} />
        </div>
      )}
      {!minus && text && <p className="--text">{text}</p>}
    </S.Wrapper>
  )
}
