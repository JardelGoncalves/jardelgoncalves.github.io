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

import withLogic from './withLogic';

const options = [
  { label: '1 página', value: '1 página' },
  { label: '2 páginas', value: '2 páginas' },
  { label: '3 páginas', value: '3 páginas' },
  { label: '4 páginas', value: '4 páginas' },
  { label: '5 páginas', value: '5 páginas' },
  { label: '6 páginas', value: '6 páginas' },
  { label: '7 páginas', value: '7 páginas' },
  { label: '8 páginas', value: '8 páginas' },
  { label: '9 páginas', value: '9 páginas' },
  { label: '+10 páginas', value: '+10 páginas' },
];

const Projects = ({ id, state, errors, loading, onSubmit, onInputChange }) => (
  <Fade right>
    <Wrapper id={id}>
      <Col>
      <h1 className="title">
      TEM UMA IDEIA E DESEJA TIRAR DO PAPEL? ENTRE EM CONTATO
      </h1>

      <form onSubmit={onSubmit}>
        <Input
          placeholder="Seu nome"
          className="input-data"
          value={state.name}
          onChange={(e) => onInputChange('name', e.target.value)}
          messageError={errors.name}
        />
        <Input
          placeholder="Email para contato"
          className="input-data"
          value={state.email}
          onChange={(e) => onInputChange('email', e.target.value)}
          messageError={errors.email}
        />
        <Select
          placeholder="Quantidade de páginas"
          className="input-data"
          options={options}
          onChange={(v) => onInputChange('pages', v)}
          messageError={errors.pages}
        />
        <Textarea
          placeholder="Breve descrição do projeto"
          className="input-data"
          value={state.description}
          onChange={(e) => onInputChange('description', e.target.value)}
          messageError={errors.description}
        />
        <div className="container__button">
          <RaisedButton loading={loading} text="Enviar" type="submit" />
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
                to="https://linkedin.com/in/jardelgoncalves"
                target="_blank"
                rel="noopener noreferrer"
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
                to="https://github.com/jardelgoncalves"
                target="_blank"
                rel="noopener noreferrer"
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
                to="mailto:jardelgoncalves1996@gmail.com"
              />
            </li>
          </ul>
        </div>
      </Col>
    </Wrapper>
  </Fade>
);

export default withLogic(Projects);
