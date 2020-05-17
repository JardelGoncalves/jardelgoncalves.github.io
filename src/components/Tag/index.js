import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

const Tag = ({ text, className }) => (
  <Wrapper className={className}>
    {text}
  </Wrapper>
);

Tag.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};

export default Tag;
