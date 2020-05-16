import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

const ExternalLink = ({ text, to, color, bg, ...rest }) => (
  <Wrapper to={to} color={color} bg={bg} {...rest}>
    {text}
  </Wrapper>
);

ExternalLink.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string,
  color: PropTypes.string,
  bg: PropTypes.string,
};

export default ExternalLink;
