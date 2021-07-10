import { Icon } from 'components/core/Icon'
import { nanoid } from 'nanoid'
import * as S from './styles'

interface ListProps {
  items: string[] | React.ReactNode[]
}

export const List = ({ items }: ListProps) => {
  return (
    <S.List>
      {items.map((item) => (
        <S.ListItem key={nanoid()}>
          {item}
          <Icon name="arrow-right" />
        </S.ListItem>
      ))}
    </S.List>
  )
}
