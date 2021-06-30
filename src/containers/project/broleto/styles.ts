import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;

  .grid-template-columns {
    margin-top: 5rem;
  }
`

export const WrapperContainer = styled.div`
  width: 100%;
`

export const Container = styled.section`
  width: 100%;
  padding: 0 3rem;
`

type ContentProps = {
  isSubsection?: boolean | undefined
}

export const Content = styled.section<ContentProps>`
  display: flex;
  flex-direction: column;
  padding: 0 0 0 1rem;
  margin-bottom: 1.5rem;
  .syntax-component {
    margin-top: 1rem;
  }
  & + & {
    margin-top: 5rem;
  }
  ${({ isSubsection }) =>
    isSubsection &&
    css`
      padding: 0;
      margin-top: 2rem;
    `}
`

export const Side = styled.section`
  position: relative;
  width: 100%;

  @media screen and (max-width: 900px) {
    display: none;
  }
`

export const Description = styled.p`
  line-height: ${({ theme }) => theme.typography.lineHeight.md};
  margin-top: 1.25rem;
  margin-bottom: 0.875rem;

  & + & {
    margin-top: 0;
  }

  strong {
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: ${({ theme }) => theme.typography.lineHeight.black};
  }
`
