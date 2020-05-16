import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

const RaisedButton = ({ text, type, onClick, color, bg }) => (
  <Wrapper type={type} color={color} bg={bg} onClick={onClick}>
    {text}
  </Wrapper>
);

RaisedButton.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
  bg: PropTypes.string,
};

RaisedButton.defaultProps = {
  type: 'button',
};

export default RaisedButton;
