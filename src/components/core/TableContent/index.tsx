import { nanoid } from 'nanoid'
import { useRef, useEffect } from 'react'

import * as DOMHandler from 'utils/DOM-handler'

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
      window.addEventListener('scroll', () => {
        if (tableContentRef.current) {
          if (window.pageYOffset + 90 > sticky) {
            tableContentRef.current.classList.add('sticky')
          } else {
            tableContentRef.current.classList.remove('sticky')
          }
        }
      })
    }
  }, [])

  useEffect(() => {
    let lastId = ''
    let contentItems = [] //menuItems
    let scrollItems = []
    let topMenuHeight = 0

    window.addEventListener('scroll', () => {
      if (tableContentRef.current) {
        topMenuHeight = DOMHandler.outerHeight(tableContentRef.current)
        contentItems = DOMHandler.findElements(tableContentRef.current, 'a')
        scrollItems = DOMHandler.proccessAttributes(contentItems, 'href')

        const fromTop = window.scrollY + topMenuHeight - 250
        const currentSection = scrollItems.filter((id) => {
          return DOMHandler.offsetTop(id) < fromTop
        })

        const id = currentSection[currentSection.length - 1]
        if (lastId !== id) {
          lastId = id
          DOMHandler.removeClass(contentItems, '--active')
          DOMHandler.findAddClass(contentItems, '--active', 'href', `${id}`)
        }
      }
    })
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
