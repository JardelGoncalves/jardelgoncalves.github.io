import styled from 'styled-components'

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

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 0 0 1rem;
  margin-bottom: 2rem;
  & + & {
    margin-top: 5rem;
  }
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
  margin-top: 2rem;
  margin-bottom: 0.875rem;

  & + & {
    margin-top: 0;
  }
`
