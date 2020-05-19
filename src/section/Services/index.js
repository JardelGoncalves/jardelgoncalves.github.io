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
      description: `Construo aplicações institucionais, landing-pages,
      e-commerce e etc... aplicando conceitos de Thumb Zone (zona de polegares)
      entre outras abordagens para melhorar a experiência em dispositivos
      mobile e com as tecnologias corretas para sua empresa.`,
      icon: <GoBrowser />,
    },
    {
      key: 'mobile',
      title: 'Desenvolvimento de aplicações Mobile',
      description: `Na era digital ser diferente pode ser um atrativo para obter
      novos clientes. Então que tal ter um aplicativo mobile personalizado para
      sua empresa/negocio? Entre em contato e vamos bater um papo.`,
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
