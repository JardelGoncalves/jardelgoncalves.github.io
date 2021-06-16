import Link from 'next/link'

import * as S from './styles'

type Article = {
  id: string
  title: string
  description: string
  textLink: string
}

interface ArticleRelatedProps {
  article: Article
}

export const ArticleRelated = ({ article }: ArticleRelatedProps) => {
  return (
    <S.Wrapper>
      <Link href={article.textLink}>
        <S.AnchorLik>{article.title}</S.AnchorLik>
      </Link>
      <S.Description>{article.description}</S.Description>
    </S.Wrapper>
  )
}
