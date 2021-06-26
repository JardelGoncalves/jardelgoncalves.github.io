import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;

  .grid-template-columns {
    margin-top: 5rem;
  }
`
export const Container = styled.section`
  width: 100%;
  padding: 0 3rem;
`

export const Side = styled.section`
  width: 100%;

  @media screen and (max-width: 900px) {
    display: none;
  }
`
