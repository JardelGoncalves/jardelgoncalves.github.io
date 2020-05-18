import React from 'react';
import { Fade } from 'react-reveal';

import { Wrapper, Col } from './styles';

import Avatar from '../../components/Avatar';
import { ExternalLink } from '../../components/Button';

const Hero = ({ id }) => (
  <Wrapper id={id}>
    <svg
      width="1024"
      height="182"
      viewBox="0 0 1024 182"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M306.5 155.5C96.9 169.9 14.8333 57.8333 0 0L1024.5
        0.5V126C997.667 127.667 924.3 137.9 845.5 165.5C766.7
        193.1 661 179.667 618 169.5C544.5 152.122 450 145.641
        306.5 155.5Z"
        fill="#5C3BFE"
      />
    </svg>
    <Fade left>
      <Col className="hero__text">
        <h2>Olá, meu nome é</h2>
        <h1>Jardel Gonçalves</h1>
        <span>
          Desenvolvedor Full-Stack na Hubtec Tecnologia &amp;
          Inovação
        </span>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
        aliquam, purus sit amet luctus venenatis, lectus magna fringilla
        urna, porttitor rhoncus dolor purus non enim praesent elementum
        facilisis leo, vel fringilla est ullamcorper eget nulla facilisi
        etiam dignissim diam quis
        </p>
        <ExternalLink text="Baixar currículo" />
      </Col>
      <Col>
        <Avatar />
      </Col>
    </Fade>

  </Wrapper>
);

export default Hero;
