import { nanoid } from 'nanoid'
import { useRef, useEffect } from 'react'

import * as S from './styles'

interface Anchor {
  title: string
  anchor: string
}

interface Content extends Anchor {
  childs?: Anchor[]
}
type TableContentProps = {
  contents: Content[]
}

export const TableContent = ({ contents }: TableContentProps) => {
  const tableContentRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (tableContentRef.current) {
      const sticky = tableContentRef.current.offsetTop
      window.onscroll = function () {
        if (tableContentRef.current) {
          if (window.pageYOffset + 80 > sticky) {
            tableContentRef.current.classList.add('sticky')
          } else {
            tableContentRef.current.classList.remove('sticky')
          }
        }
      }
    }
  }, [])
  return (
    <S.Container ref={tableContentRef}>
      <S.Title>Conteudo</S.Title>
      <S.AnchorGroup level={0}>
        {contents.map((content) => (
          <S.AnchorGroupItem key={nanoid()}>
            <S.Anchor href={content.anchor}>{content.title}</S.Anchor>
            {content.childs?.length &&
              content.childs.map((child) => (
                <S.AnchorGroup level={1} key={nanoid()}>
                  <S.AnchorGroupItem>
                    <S.Anchor href={child.anchor}>{child.title}</S.Anchor>
                  </S.AnchorGroupItem>
                </S.AnchorGroup>
              ))}
          </S.AnchorGroupItem>
        ))}
      </S.AnchorGroup>
    </S.Container>
  )
}
