import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

const MessageError = ({ text, color }) => (
  <Wrapper color={color}>{text}</Wrapper>
);

MessageError.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

MessageError.defaultProps = {
  text: '',
  color: '#ff9696',
};

export default MessageError;
