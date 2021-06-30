import styled from 'styled-components'

export const ListItem = styled.li`
  padding: 0.875rem 1.5rem;
  position: relative;
  line-height: ${({ theme }) => theme.typography.lineHeight.md};
  svg {
    position: absolute;
    top: 16px;
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
    color: ${({ theme }) => theme.colors.title};
    font-weight: 600;
  }
`
