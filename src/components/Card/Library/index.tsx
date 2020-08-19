import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';

import { Box, LogoWrapper, Wrap } from './styles';
import { LinkButton } from '../../Button';

interface ILibraryItem {
  path?: string;
  logo?: string;
  name?: string;
  description?: string;
}

interface ILibrariesCard {
  data: ILibraryItem[];
}

export const LibrariesCard = ({ data }: ILibrariesCard) => (
  <Wrap>
    <ScrollContainer
      className="container"
      vertical={false}
      horizontal
    >
      {data.map((item:ILibraryItem) => (
        <Box>
          <LogoWrapper>
            <img src={item.logo} alt={item.name} />
          </LogoWrapper>
          <h5>{item.name}</h5>
          <p>
            {item.description}
          </p>
          <LinkButton
            text="View doc"
            path={item.path}
            border="ALL"
            color="#fff"
            outline
          />
        </Box>
      ))}
    </ScrollContainer>
  </Wrap>
);
