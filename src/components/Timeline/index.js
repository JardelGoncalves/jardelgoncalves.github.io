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
          Empresa que atualmente trabalho com desenvolvimento diferenciado
          aplicações Web e Mobile, participei e participo de projetos de
          Fintech, Health Tech e entre outros.
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
          O curso de Redes de Computadores da UFC de Quixadá é diferenciado
          devido a não só focar em disciplinas voltado para infraestrutura mas
          também ter disciplinas de programção desde o básico até disciplinas
          voltado para desenvolvimento de sistemas distribuidos e
          desenvolvimento Web.
        </p>
      </TimelineElement>
    </TimelineWrapper>
  </Wrapper>
);

  export default Timeline;
