import React from 'react';
import { Fade } from 'react-reveal';

import Timeline from '../../components/Timeline';

import { Wrapper } from './styles';

const TimelineSection = ({ id }) => (
  <Fade left>
    <Wrapper id={id}>
      <h1 className="title">Linha do tempo</h1>
      <Timeline />
    </Wrapper>
  </Fade>
);

export default TimelineSection;
