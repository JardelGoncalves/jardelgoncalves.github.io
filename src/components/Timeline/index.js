import React from 'react';
import { MdWork, MdSchool } from 'react-icons/md';
import 'react-vertical-timeline-component/style.min.css';

import { Wrapper, TimelineWrapper, TimelineElement } from './styles';

const Timeline = () => (
  <Wrapper>
    <TimelineWrapper className="vertical-timeline-custom-line">
      <TimelineElement
        date="2019 - Atual"
        icon={<MdWork />}
      >
        <h3 className="vertical-timeline-element-title">
          Desenvolvedor FullStack - Hubtec Tecnologia &amp; Inovação
        </h3>
        <p>
          Creative Direction, User Experience, Visual Design, Project
          Management, Team Leading
        </p>
      </TimelineElement>
      <TimelineElement
        date="2016 - 2018"
        icon={<MdSchool />}
      >
        <h3 className="vertical-timeline-element-title">
          Graduação em Redes de Computadores pela Universidade Federal
          do Ceará - Campus Quixadá
        </h3>
        <p>
          Creative Direction, User Experience, Visual Design, Project
          Management, Team Leading
        </p>
      </TimelineElement>
    </TimelineWrapper>
  </Wrapper>
);

  export default Timeline;
