import React from 'react';

import { Wrap } from './styles';

interface IRaisedProp {
  text?: string;
  color?: string;
  bg?: string;
  outline?: boolean | false;
}

export const RaisedButton = ({
  text,
  bg,
  color,
  outline,
}: IRaisedProp) => (
  <Wrap bg={bg} color={color} outline={outline}>
    {text}
  </Wrap>
);
