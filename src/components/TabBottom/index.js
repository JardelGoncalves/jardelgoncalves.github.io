import React from 'react';
import { Link } from 'gatsby';

import { FiStar } from 'react-icons/fi';
import {
  AiOutlineProject,
  AiOutlineTrophy,
  AiOutlineContacts,
  AiOutlineBook,
} from 'react-icons/ai';


import { Wrapper } from './styles';

const TabBottom = () => (
    <Wrapper>
      <ul>
        <li>
          <Link to="#skills">
            <FiStar />
            <span>Habilidades</span>
          </Link>
        </li>
        <li>
          <Link to="#libraries">
            <AiOutlineBook />
            <span>Bibliotecas</span>
          </Link>
        </li>
        <li>
          <Link to="#projects">
            <AiOutlineProject />
            <span>Projetos</span>
          </Link>
        </li>
        <li>
          <Link to="#timeline">
            <AiOutlineTrophy />
            <span>Linha do tempo</span>
          </Link>
        </li>
        <li>
          <Link to="#contact">
            <AiOutlineContacts />
            <span>Contato</span>
          </Link>
        </li>
      </ul>
    </Wrapper>
  );

export default TabBottom;
