import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula as style } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript'
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx'
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx'
import yaml from 'react-syntax-highlighter/dist/cjs/languages/prism/yaml'

import * as S from './styles'
import { useState } from 'react'
import { nanoid } from 'nanoid'

type Codes = {
  label: string
  language: string
  code: string
}

interface SintaxProps {
  codes: Codes[]
}

SyntaxHighlighter.registerLanguage('jsx', jsx)
SyntaxHighlighter.registerLanguage('tsx', tsx)
SyntaxHighlighter.registerLanguage('yaml', yaml)
SyntaxHighlighter.registerLanguage('typescript', typescript)
SyntaxHighlighter.registerLanguage('javascript', javascript)

export const Sintax = ({ codes }: SintaxProps) => {
  const [index, setIndex] = useState(0)
  const onClick = (index: number) => {
    setIndex(index)
  }

  return (
    <S.WrapperSyntax className="syntax-component">
      <S.LanguageWrapper>
        {codes.map((code, i) => (
          <S.Language
            key={nanoid()}
            active={i === index}
            clickable={codes.length > 1}
            onClick={() => onClick(i)}
          >
            {code.label}
          </S.Language>
        ))}
      </S.LanguageWrapper>
      <SyntaxHighlighter language={codes[index].language} style={style}>
        {codes[index].code}
      </SyntaxHighlighter>
    </S.WrapperSyntax>
  )
}
