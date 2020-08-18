import React from 'react';
import { MdWork, MdSchool } from 'react-icons/md';
import 'react-vertical-timeline-component/style.min.css';

import { Wrapper, TimelineWrapper, TimelineElement } from './styles';

export const Timeline = () => (
  <Wrapper>
    <TimelineWrapper className="vertical-timeline-custom-line active">
      <TimelineElement
        date="Jul/2020 - Atual"
        icon={<MdWork />}
      >
        <h3 className="vertical-timeline-element-title">
          Desenvolvedor Back End - Casa Magalhães
        </h3>
        <p>
          Empresa que atualmente trabalho, desenvolvendo soluções para
          simplificar a gestão de varejos e food-service com mais de
          18 mil clientes em 27 estados do Brasil.
        </p>
      </TimelineElement>
      <TimelineElement
        date="Out/2019 - Julho/2020"
        icon={<MdWork />}
      >
        <h3 className="vertical-timeline-element-title">
          Desenvolvedor FullStack - Hubtec Tecnologia &amp; Inovação
        </h3>
        <p>
          Empresa que atualmente trabalho, desenvolvendo
          aplicações Web e Mobile, participei projetos de
          Fintech, Health Tech e entre outros.
        </p>
      </TimelineElement>
      <TimelineElement
        date="2020"
        icon={<MdSchool />}
      >
        <h3 className="vertical-timeline-element-title">
          AceleraDev React - Codenation
        </h3>
        <p>
          A Codenation é uma Edtech com objetivo de formar/aperfeiçoar
          profisionais para o setor de T.I. Tive a oportunidade de participar
          do AceleraDev React onde pude trabalhar com as principais bibliotecas
          do ecosistema do React como Redux. Pode aprender tambem sobre padrões
          de projetos, integrações e utilizar APIs do React como useEffect, useCallback,
          useState, useRef e useContext.
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
