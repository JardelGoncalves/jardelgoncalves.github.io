import styled from 'styled-components'

export const Container = styled.nav`
  margin-top: 4rem;
  position: relative;
  max-height: 50vh;
  height: 100%;
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 2rem;

  &.sticky {
    position: fixed;
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`

export const Title = styled.h4`
  font-size: 1rem;
  font-weight: 900;
  color: #52575c;
  margin-bottom: 0.5rem;
`

type AnchorGroupProps = {
  level: number
}

export const AnchorGroup = styled.ul<AnchorGroupProps>`
  list-style: none;
  margin: 0;
  padding: 0;
  .table-content__anchor {
    margin-left: ${({ level }) => (level ? level * 12 : 0)}px;
    font-size: ${({ level }) => (level ? 15 - level * 2 : 14)}px;
  }
`

export const AnchorGroupItem = styled.li`
  margin: 0;
  padding: 0;
`

export const Anchor = styled.a.attrs((props) => ({
  className: 'table-content__anchor',
  ...props
}))`
  display: block;
  font-size: 15px;
  font-weight: 500;
  color: #52575c;
  text-decoration: none;

  &:hover {
    color: #fafafa;
  }

  &.--active {
    color: ${({ theme }) => theme.colors.tertiary};
  }
  margin-top: 0.75rem;
`
