import React from 'react';
import { Fade } from 'react-reveal';
import { FiSmartphone } from 'react-icons/fi';
import { GoBrowser } from 'react-icons/go';

import ListService from '../../components/ListService';

import { Wrapper } from './styles';

const Services = ({ id }) => {
  const services = [
    {
      key: 'web',
      title: 'Desenvolvimento de aplicações Web',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
        aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna,
        porttitor rhoncus dolor purus non enim praesent elementum facilisis leo,
        vel`,
      icon: <GoBrowser />,
    },
    {
      key: 'mobile',
      title: 'Desenvolvimento de aplicações Mobile',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
        aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna,
        porttitor rhoncus dolor purus non enim praesent elementum facilisis leo,
        vel`,
      icon: <FiSmartphone />,
    },
  ];

  return (
    <Fade left>
      <Wrapper id={id}>
        <ListService services={services} />
      </Wrapper>
    </Fade>
  );
};

export default Services;
