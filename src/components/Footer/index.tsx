import React from 'react';

import { Wave, SquareFooter } from '../Svg';
import { Title } from '../Title';

import { Wrap, Row } from './styles';

export const Footer: React.FC = () => (
  <Wrap>
    <Wave />
    <SquareFooter />
    <Row>
      <div className="column">
        <Title size={60} color="#ffffff" text="Contatos" />
        <ul>
          <li>jardelgoncalves1996@gmail.com</li>
          <li>Telegram</li>
          <li>WhatsApp</li>
        </ul>
      </div>
      <div className="column">
        <Title size={60} color="#ffffff" text="Siga-me" />
        <ul>
          <li>Linkedin</li>
          <li>Github</li>
          <li>Medium</li>
        </ul>
      </div>
    </Row>
  </Wrap>
);
