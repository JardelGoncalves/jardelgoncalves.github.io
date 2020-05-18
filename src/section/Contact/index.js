import React from 'react';
import { Fade } from 'react-reveal';
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
} from 'react-icons/ai';

import { Input, Select, Textarea } from '../../components/Form';
import { RaisedButton, ExternalLink } from '../../components/Button';

import { Wrapper, Col } from './styles';

const Projects = ({ id }) => (
  <Fade right>
    <Wrapper id={id}>
      <Col>
      <h1 className="title">
      TEM UMA IDEIA E DESEJA TIRAR DO PAPEL? ENTRE EM CONTATO
      </h1>

      <form>
        <Input placeholder="Seu nome" className="input-data" />
        <Input placeholder="Email para contato" className="input-data" />
        <Select placeholder="Quantidade de páginas" className="input-data" />
        <Textarea
          placeholder="Breve descrição do projeto"
          className="input-data"
        />
        <div className="container__button">
          <RaisedButton text="Enviar" type="submit" />
        </div>
      </form>
      </Col>
      <Col className="other">
        <div className="other__contacts">
          <h1 className="title">Contato</h1>
          <ul>
            <li>
              <ExternalLink
                text={(
                  <>
                    <AiOutlineLinkedin />
                    <span>/jardelgoncalves</span>
                  </>
                )}
              />
            </li>
            <li>
              <ExternalLink
                text={(
                  <>
                    <AiOutlineGithub />
                    <span>/jardelgoncalves</span>
                  </>
                )}
              />
            </li>
            <li>
              <ExternalLink
                text={(
                  <>
                    <AiOutlineMail />
                    <span>jardelgoncalves1996@gmail.com</span>
                  </>
                )}
              />
            </li>
          </ul>
        </div>
      </Col>
    </Wrapper>
  </Fade>
);

export default Projects;
