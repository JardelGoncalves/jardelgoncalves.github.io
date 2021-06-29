import styled from 'styled-components'

export const ListItem = styled.li`
  padding: 1rem 1.5rem;
  position: relative;
  svg {
    position: absolute;
    top: 12px;
    left: -4px;
    path {
      stroke: ${({ theme }) => theme.colors.title};
    }
  }
`

export const List = styled.ul.attrs((props) => ({
  className: 'list',
  ...props
}))`
  list-style: none;
  display: flex;
  flex-direction: column;

  strong {
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 600;
  }
`
