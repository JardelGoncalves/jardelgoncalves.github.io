import React from 'react';

import { Wrap } from './styles';

interface IProp {
  onClick: () => void
  menuActive: boolean

}

const HamburgerMenu = ({ onClick, menuActive }: IProp) => (
  <Wrap>
    <input id="menu-hamburguer" checked={menuActive} type="checkbox" onClick={onClick} />
    <label htmlFor="menu-hamburguer">
      <div className="menu">
        <span className="hamburguer" />
      </div>
    </label>
  </Wrap>
);

export { HamburgerMenu };
