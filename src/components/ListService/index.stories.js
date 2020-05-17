import React from 'react';
import { storiesOf } from '@storybook/react';
import { FiSmartphone } from 'react-icons/fi';
import { GoBrowser } from 'react-icons/go';

import ListService from '.';

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

storiesOf('ListService', module)
  .add('Default', () => (
    <ListService services={services} />
  ));
