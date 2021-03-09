import styled, { css } from 'styled-components'

const common = css`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Wrapper = styled.div`
  ${common};
  align-items: center;
`

export const Content = styled.div`
  ${common};
  margin: 140px 0 48px 0;
  max-width: 1100px;
  width: 100%;
  padding: 0 24px;
`
