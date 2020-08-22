import React from 'react';

import { Header, Hello, MouseDown } from '../../components';
import { Wrap } from './styles';

const Hero = ({ t }) => (
  <Wrap>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="949"
      height="175"
      fill="none"
      viewBox="0 0 949 175"
      className="wave-top"
    >
      <path
        fill="#5BCA5D"
        d="M258.512 118.736C68.366 167.637 13.74 58.307 0 0l949 .504v126.529c-24.856 1.68-92.816 11.997-165.809 39.823-72.993 27.827-196.304-23.755-236.135-34.005-110.87-28.531-158.025-47.682-288.544-14.115z"
      />
    </svg>
    <Header t={t} />
    <Hello t={t} />
    <MouseDown href="#" />
  </Wrap>
);

export { Hero };
