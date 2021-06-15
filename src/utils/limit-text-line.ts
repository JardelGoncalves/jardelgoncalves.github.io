import { css } from 'styled-components'

export function limitTextLine(line: number) {
  return css`
    display: -webkit-box;
    -webkit-line-clamp: ${line};
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  `
}
