import React, { useState } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';

import { CardProject, Wrapper, Show, Slide } from './styles';
import Tag from '../Tag';
import { ExternalLink } from '../Button';

import fashionista from '../../assets/images/projects/card/fashionista.png';
import hubfinance from '../../assets/images/projects/card/hubfinance.png';
import quisocial from '../../assets/images/projects/card/quisocial.png';
import tindev from '../../assets/images/projects/card/tindev.png';
import todo from '../../assets/images/projects/card/todo.png';
import favorite from '../../assets/images/projects/card/favorite.png';


import fashionistaMock from
  '../../assets/images/projects/mockup/fashionista.png';
import hubfinanceMock from '../../assets/images/projects/mockup/hubfinance.png';
import quisocialMock from '../../assets/images/projects/mockup/quisocial.png';
import tindevMock from '../../assets/images/projects/mockup/tindev.png';
import todoMock from '../../assets/images/projects/mockup/todo.png';
import favoriteMock from '../../assets/images/projects/mockup/favorite.png';

const ListProject = () => {
  const [index, setIndex] = useState(0);
  return (
    <Wrapper>
      <h1 className="title">Projetos</h1>

      <ScrollContainer
        className="container"
        vertical={false}
        horizontal
      >
        <CardProject className="card__project" active={index === 0}>
          <button type="button" onClick={() => setIndex(0)}>
            <img src={fashionista} alt="Miniatura fashionista" />
            <div className="card__project__caption">
              Fashionista
            </div>
          </button>
        </CardProject>
        <CardProject className="card__project" active={index === 1}>
          <button type="button" onClick={() => setIndex(1)}>
            <img src={hubfinance} alt="Miniatura Hub Finance" />
            <div className="card__project__caption">
              Hub Finance
            </div>
          </button>
        </CardProject>
        <CardProject className="card__project" active={index === 2}>
          <button type="button" onClick={() => setIndex(2)}>
            <img src={quisocial} alt="Miniatura QuiSocial" />
            <div className="card__project__caption">
              QuiSocial
            </div>
          </button>
        </CardProject>
        <CardProject className="card__project" active={index === 3}>
          <button type="button" onClick={() => setIndex(3)}>
            <img src={tindev} alt="Miniatura Tindev" />
            <div className="card__project__caption">
              Tindev
            </div>
          </button>
        </CardProject>
        <CardProject className="card__project" active={index === 4}>
          <button type="button" onClick={() => setIndex(4)}>
            <img src={todo} alt="Miniatura Todo List" />
            <div className="card__project__caption">
              Todo List
            </div>
          </button>
        </CardProject>
        <CardProject className="card__project" active={index === 5}>
          <button type="button" onClick={() => setIndex(5)}>
            <img src={favorite} alt="Miniatura Favorite Music" />
            <div className="card__project__caption">
              Favorite Music
            </div>
          </button>
        </CardProject>
      </ScrollContainer>
      <Slide>
        {/* Fashionista */}
        <Show>
          <div className={`project ${index === 0 ? 'project--active' : ''}`}>
            <h1>Fashionista</h1>
            <p>
              Projeto Final do programa AceleraDev React da Codenation que
              consistia em desenvolver uma aplicação Mobile First das principais
              Funcionalidades de um e-commerce no segmento de moda feminina.
              As funcionalidades são: Listar produto, visualizar produto,
              adicionar produto ao carrinho, visualizar produtos no carrinho
              e pesquisar produto. Além disso o site persiste as informações
            </p>
            <div className="project__tech">
              <h2>Tecnologias</h2>
              <div className="tech">
                <Tag text="React" />
                <Tag text="Redux" />
                <Tag text="PostgreSQL" />
                <Tag text="SQLite" />
                <Tag text="Objection.js" />
                <Tag text="Express.js" />
                <Tag text="Mocha" />
                <Tag text="Chai" />
                <Tag text="Docker" />
                <Tag text="AWS EC2" />
              </div>
              <div className="project__links">
                <ExternalLink text="Código fonte" />
                <ExternalLink text="Demo" />
              </div>
            </div>

            <div className="project__image">
              <img src={fashionistaMock} alt="Hub Finance" />
            </div>
          </div>
        </Show>
        <Show>
          <div className={`project ${index === 1 ? 'project--active' : ''}`}>
            <h1>Hub Finance</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="project__tech">
              <h2>Tecnologias</h2>
              <div className="tech">
                <Tag text="React" />
              </div>
              <div className="project__links">
                <ExternalLink text="Código fonte" />
                <ExternalLink text="Demo" />
              </div>
            </div>
            <div className="project__image">
              <img src={hubfinanceMock} alt="Hub Finance" />
            </div>
          </div>
        </Show>
        <Show>
          <div className={`project ${index === 2 ? 'project--active' : ''}`}>
            <h1>QuiSocial</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="project__tech">
              <h2>Tecnologias</h2>
              <div className="tech">
                <Tag text="React" />
              </div>
              <div className="project__links">
                <ExternalLink text="Código fonte" />
                <ExternalLink text="Demo" />
              </div>
            </div>
            <div className="project__image">
              <img src={quisocialMock} alt="QuiSocial" />
            </div>
          </div>
        </Show>
        <Show>
          <div className={`project ${index === 3 ? 'project--active' : ''}`}>
            <h1>Tindev</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="project__tech">
              <h2>Tecnologias</h2>
              <div className="tech">
                <Tag text="React" />
              </div>
              <div className="project__links">
                <ExternalLink text="Código fonte" />
                <ExternalLink text="Demo" />
              </div>
            </div>
            <div className="project__image">
              <img src={tindevMock} alt="Tindev" />
            </div>
          </div>
        </Show>
        <Show>
          <div className={`project ${index === 4 ? 'project--active' : ''}`}>
            <h1>Todo List</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="project__tech">
              <h2>Tecnologias</h2>
              <div className="tech">
                <Tag text="React" />
              </div>
              <div className="project__links">
                <ExternalLink text="Código fonte" />
                <ExternalLink text="Demo" />
              </div>
            </div>
            <div className="project__image">
              <img src={todoMock} alt="Todo List" />
            </div>
          </div>
        </Show>
        <Show>
          <div className={`project ${index === 5 ? 'project--active' : ''}`}>
            <h1>Favorite Music</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="project__tech">
              <h2>Tecnologias</h2>
              <div className="tech">
                <Tag text="React" />
              </div>
              <div className="project__links">
                <ExternalLink text="Código fonte" />
                <ExternalLink text="Demo" />
              </div>
            </div>
            <div className="project__image">
              <img src={favoriteMock} alt="Favorite Music" />
            </div>
          </div>
        </Show>
      </Slide>
    </Wrapper>
  );
};


export default ListProject;
