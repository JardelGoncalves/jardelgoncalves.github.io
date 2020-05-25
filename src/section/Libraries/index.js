import React from 'react';
import { Fade } from 'react-reveal';

import Libraries from '../../components/Libraries';

import { Wrapper } from './styles';

const LibrariesPage = ({ id }) => (
    <Fade left>
      <Wrapper id={id}>
        <Libraries />
      </Wrapper>
    </Fade>
  );

export default LibrariesPage;
