import React from 'react';
import { Link } from 'gatsby';

import { FiStar } from 'react-icons/fi';
import {
  AiOutlineProject,
  AiOutlineTrophy,
  AiOutlineContacts,
} from 'react-icons/ai';
import { FaRegHandshake } from 'react-icons/fa';


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
          <Link to="#services">
            <FaRegHandshake />
            <span>Serviços</span>
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
