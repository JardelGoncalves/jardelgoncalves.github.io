import { Wrapper, Content } from './styles'

export interface IContainer {
  children: React.ReactChild
}

export const Container = ({ children }: IContainer) => {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  )
}
