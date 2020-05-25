import React from 'react';

import { Wrapper } from './styles';

import avatar from '../../assets/images/avatar.webp';

const Avatar = () => (
    <Wrapper>
      <img src={avatar} alt="Avatar" />
    </Wrapper>
  );

export default Avatar;
