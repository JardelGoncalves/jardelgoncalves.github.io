import React from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

import { Wrap } from './styles';

import {
  Title,
  Avatar,
  IconButton,
  LinkButton,
} from '../../components';

const About = () => (
  <Wrap>
    <div className="about__content">
      <Title text="Sobre mim" size={60} disableSvg={false} />
      <p>
        Sempre gostei de desafios e entrar na área de T.I foi a decisão certa.
        Desde o inicio da minha carreira como desenvolvedor sempre busquei aperfeiçoar
        minhas qualidades e melhorar defeitos e em meio a essas experiências encontrei
        pessoas talentosas que me ajudaram não só a buscar a melhor solução, mas uma
        solução peformártica para o problema e desde então sou apaixonado pelo que faço.
        <strong className="about__content--bold"> Não escrevo só código, eu soluciono problema.</strong>
      </p>
      <div className="about__content__footer">
        <LinkButton
          text="Baixar currículo"
          path="#"
          isExternal
          border="ALL"
          color="#fff"
        />
        <div className="about__content__footer__social">
          <IconButton path="#" icon={<FiGithub />} outline />
          <IconButton path="#" icon={<FiLinkedin />} outline />
        </div>
      </div>
    </div>
    <Avatar url="/static/imgs/avatar.webp" />
  </Wrap>
);

export { About };
