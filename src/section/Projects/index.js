import React from 'react';
import { Fade } from 'react-reveal';

import ListProject from '../../components/ListProject';

import { Wrapper } from './styles';

const Projects = ({ id }) => (
  <Fade right>
    <Wrapper id={id}>
      <ListProject />
    </Wrapper>
  </Fade>
);

export default Projects;
