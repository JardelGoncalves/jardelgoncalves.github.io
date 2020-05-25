import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import { FaGithub, FaNpm } from 'react-icons/fa';

import { ExternalLink } from '../Button';
import { Wrapper, Card } from './styles';

import broleto from '../../assets/images/library/broleto.webp';

const Libraries = () => (
    <Wrapper>
      <h1 className="title">Bibliotecas Open Source</h1>
      <ScrollContainer
        className="container"
        vertical={false}
        horizontal
      >
        <Card className="card__library">
          <div className="card__library__content">
            <img src={broleto} alt="Logo broleto" />
            <h2>broleto</h2>
            <p>
              Biblioteca construída com Typescript  para facilitar a obtenção de
              informações e validações de boletos bancários e de boletos de
              arrecadações.
            </p>
            <div className="card__library__buttons">
              <ExternalLink
                text={<FaGithub />}
                to="https://github.com/jardelgoncalves/broleto"
                target="_blank"
                rel="noopener noreferrer"
              />
              <ExternalLink
                text={<FaNpm size={24} />}
                to="https://www.npmjs.com/package/broleto"
                target="_blank"
                rel="noopener noreferrer"
              />
            </div>
          </div>
        </Card>
      </ScrollContainer>
    </Wrapper>
  );

export default Libraries;
