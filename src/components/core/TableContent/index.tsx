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
  customOffset?: number
  color?: string
  activeColor?: string
  title: string
}

export const TableContent = ({
  contents,
  customOffset,
  activeColor,
  color,
  title
}: TableContentProps) => {
  const tableContentRef = useRef<HTMLDivElement>(null)

  function onItemClick(event: React.MouseEvent) {
    const element = event.target as HTMLAnchorElement

    if (element.getAttribute) {
      const id = element.getAttribute('href')
      const section = document.querySelector(id as string)
      if (section) {
        const y = section.getBoundingClientRect().top + window.pageYOffset - 80
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    }
    event.preventDefault()
  }

  function onScroll() {
    let lastId = ''
    let contentItems = []
    let scrollItems = []
    let topMenuHeight = 0

    if (tableContentRef.current) {
      topMenuHeight = DOMHandler.outerHeight(tableContentRef.current)
      contentItems = DOMHandler.findElements(tableContentRef.current, 'a')
      scrollItems = DOMHandler.proccessAttributes(contentItems, 'href')

      const fromTop = window.scrollY + topMenuHeight - (customOffset || 250)
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
  }

  useEffect(() => {
    if (tableContentRef.current) {
      tableContentRef.current.classList.remove('sticky')
      const sticky =
        tableContentRef.current.getBoundingClientRect().top + window.scrollY
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
    window.addEventListener('scroll', onScroll)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <S.Container ref={tableContentRef}>
      <S.Title color={color}>{title}</S.Title>
      <S.AnchorGroup level={0}>
        {contents.map((content) => (
          <S.AnchorGroupItem key={nanoid()}>
            <S.Anchor
              activeColor={activeColor}
              color={color}
              onClick={onItemClick}
              href={content.anchor}
            >
              {content.title}
            </S.Anchor>
            {content.childs?.length &&
              content.childs.map((child) => (
                <S.AnchorGroup level={1} key={nanoid()}>
                  <S.AnchorGroupItem>
                    <S.Anchor
                      activeColor={activeColor}
                      color={color}
                      onClick={onItemClick}
                      href={child.anchor}
                    >
                      {child.title}
                    </S.Anchor>
                  </S.AnchorGroupItem>
                </S.AnchorGroup>
              ))}
          </S.AnchorGroupItem>
        ))}
      </S.AnchorGroup>
    </S.Container>
  )
}
