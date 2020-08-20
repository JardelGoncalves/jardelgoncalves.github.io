import React from 'react';

import { Container } from './styles';

interface ILayout {
  children?: React.ReactNode;
}

const Layout = ({ children }: ILayout) => (
  <Container>
    {children}
  </Container>
);

export { Layout };
