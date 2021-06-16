import Image from 'next/image'
import { Card } from 'components/core/Card'

import * as S from './styles'
import { Article } from 'interfaces/article'

interface ArticleCardProps {
  sideBySide?: boolean
  article: Article
}

export const ArticleCard = ({
  article,
  sideBySide = false
}: ArticleCardProps) => {
  return (
    <Card noPadding>
      <S.Container sideBySide={sideBySide}>
        <S.ImageCover sideBySide={sideBySide}>
          <Image
            alt={article.image.alt}
            src={article.image.url}
            width={900}
            height={600}
          />
        </S.ImageCover>
        <S.Details>
          <S.Title>{article.title}</S.Title>
          <S.Description>{article.description}</S.Description>
          <S.TimeToRead>{article.readToTime}</S.TimeToRead>
        </S.Details>
      </S.Container>
    </Card>
  )
}
