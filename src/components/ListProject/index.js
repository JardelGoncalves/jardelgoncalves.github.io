import React, { useState } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';

import { CardProject, Wrapper, Show, Slide } from './styles';
import Tag from '../Tag';
import { ExternalLink } from '../Button';

import fashionista from '../../assets/images/projects/card/fashionista.webp';
import hubfinance from '../../assets/images/projects/card/hubfinance.webp';
import quisocial from '../../assets/images/projects/card/quisocial.webp';
import tindev from '../../assets/images/projects/card/tindev.webp';
import todo from '../../assets/images/projects/card/todo.webp';
import contact from '../../assets/images/projects/card/contact.webp';
import instagram from '../../assets/images/projects/card/instagram.webp';


import fashionistaMock from
  '../../assets/images/projects/mockup/fashionista.webp';
import hubfinanceMock from
  '../../assets/images/projects/mockup/hubfinance.webp';
import quisocialMock from '../../assets/images/projects/mockup/quisocial.webp';
import tindevMock from '../../assets/images/projects/mockup/tindev.webp';
import todoMock from '../../assets/images/projects/mockup/todo.webp';
import contactMock from '../../assets/images/projects/mockup/contact.webp';
import instagramMock from '../../assets/images/projects/mockup/instagram.webp';

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
            <img src={instagram} alt="Miniatura Instagram Clone" />
            <div className="card__project__caption">
              Instagram Clone
            </div>
          </button>
        </CardProject>
        <CardProject className="card__project" active={index === 3}>
          <button type="button" onClick={() => setIndex(3)}>
            <img src={quisocial} alt="Miniatura QuiSocial" />
            <div className="card__project__caption">
              QuiSocial
            </div>
          </button>
        </CardProject>
        <CardProject className="card__project" active={index === 4}>
          <button type="button" onClick={() => setIndex(4)}>
            <img src={contact} alt="Miniatura Contato App" />
            <div className="card__project__caption">
              Contato App
            </div>
          </button>
        </CardProject>
        <CardProject className="card__project" active={index === 5}>
          <button type="button" onClick={() => setIndex(5)}>
            <img src={tindev} alt="Miniatura Tindev" />
            <div className="card__project__caption">
              Tindev
            </div>
          </button>
        </CardProject>
        <CardProject className="card__project" active={index === 6}>
          <button type="button" onClick={() => setIndex(6)}>
            <img src={todo} alt="Miniatura Todo List" />
            <div className="card__project__caption">
              Todo List
            </div>
          </button>
        </CardProject>
      </ScrollContainer>
      <Slide>
        {/* Fashionista */}
        <Show className={`project ${index === 0 ? 'project--active' : ''}`}>
          <div className="project__image">
            <img src={fashionistaMock} alt="Projeto Fashionista" />
          </div>
          <div className="project__content">
            <h1>Fashionista</h1>
            <p>
              Projeto Final do programa AceleraDev React da Codenation que
              consistia em desenvolver uma aplicação Mobile First das principais
              Funcionalidades de um e-commerce no segmento de moda feminina.
              As funcionalidades são: Listar produto, visualizar produto,
              adicionar produto ao carrinho, visualizar produtos no carrinho
              e pesquisar produto. Além disso o site persiste as informações.
            </p>
            <div className="project__tech">
              <h2>Tecnologias</h2>
              <div className="tech">
                <Tag text="React" />
                <Tag text="Redux" />
                <Tag text="Redux Saga" />
                <Tag text="Next.js" />
                <Tag text="immer" />
                <Tag text="Eslint" />
                <Tag text="Prittier" />
                <Tag text="Vercel" />
              </div>
            </div>
            <div className="project__links">
              <ExternalLink
                text="Código fonte"
                to="https://github.com/jardelgoncalves/fashionista-ecommerce"
                target="_blank"
                rel="noopener noreferrer"
              />
              <ExternalLink
                text="Demo"
                to="https://fashionista.now.sh"
                target="_blank"
                rel="noopener noreferrer"
              />
            </div>
          </div>
        </Show>
        {/* Hub Finance */}
        <Show className={`project ${index === 1 ? 'project--active' : ''}`}>
          <div className="project__image">
            <img src={hubfinanceMock} alt="Projeto  Hub Finance" />
          </div>
          <div className="project__content">
            <h1>Hub Finance</h1>
            <p>
              Projeto de estudo que tem como objetivo cadastrar todas as
              despesas e receitas de uma pessoa. Todas as despesas podem ser
              cadastrada com uma categoria, são apresentado gráficos
              comparativos de despesas por categoria e valores de despesas e
              receitas por mês. Para ter aceso é necessário efetar cadastro
              e login.
            </p>
            <div className="project__tech">
              <h2>Tecnologias</h2>
              <div className="tech">
                <Tag text="React" />
                <Tag text="Redux" />
                <Tag text="Thunk" />
                <Tag text="PostgreSQL" />
                <Tag text="SQLite" />
                <Tag text="Objection.js" />
                <Tag text="Express.js" />
                <Tag text="Mocha" />
                <Tag text="Chai" />
                <Tag text="Docker" />
                <Tag text="AWS EC2" />
              </div>
            </div>
            <div className="project__links">
            <ExternalLink
              text="Código fonte"
              to="https://github.com/jardelgoncalves/hub-finance"
              target="_blank"
              rel="noopener noreferrer"
            />
            </div>
          </div>
        </Show>
        {/* Instagram clone */}
        <Show className={`project ${index === 2 ? 'project--active' : ''}`}>
          <div className="project__image">
            <img src={instagramMock} alt="Projeto Instagram clone" />
          </div>
          <div className="project__content">
            <h1>Instagram Clone</h1>
            <p>
              Projeto desafio da 7ª Semana do AceleraDev React da Codenation
              que teve como objetivo criar o clone do Instagram replicando
              funcionalidades como Stories, Feed, página do usuário e cadastro
              de usuário. O usuario pode acessar os stories dos usuarios do
              sistema, visualizar perfil dos outros usuario, ver as fotos
              publicadas.
            </p>
            <div className="project__tech">
              <h2>Tecnologias</h2>
              <div className="tech">
                <Tag text="React" />
                <Tag text="SASS" />
                <Tag text="fetch" />
              </div>
            </div>
            <div className="project__links">
              <ExternalLink
                text="Código fonte"
                to="https://github.com/jardelgoncalves/instagram-clone-react"
                target="_blank"
                rel="noopener noreferrer"
              />
              <ExternalLink
                text="Demo"
                to="https://jardelgoncalves-instagram-react.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              />
            </div>
          </div>
        </Show>
        {/* QuiSocial */}
        <Show className={`project ${index === 3 ? 'project--active' : ''}`}>
          <div className="project__image">
            <img src={quisocialMock} alt="Projeto QuiSocial" />
          </div>
          <div className="project__content">
            <h1>QuiSocial</h1>
            <p>
              Projeto de estudo que tem como objetivo criar uma simples rede
              social. O usuário precisa se cadastrar e efetuar login, após essa
              etapa ele pode visualizar todos os posts ou postar algo. Além
              disso ele pode dar palmas (claps) para os posts toda essa
              interação é feita em tempo real.
            </p>
            <div className="project__tech">
              <h2>Tecnologias</h2>
              <div className="tech">
                <Tag text="Express.js" />
                <Tag text="React" />
                <Tag text="SQLite" />
                <Tag text="Sequelize" />
                <Tag text="Socket.io" />
                <Tag text="Mocha" />
                <Tag text="Chai" />
              </div>
            </div>
            <div className="project__links">
              <ExternalLink
                text="Código fonte"
                to="https://github.com/jardelgoncalves/QuiSocial"
                target="_blank"
                rel="noopener noreferrer"
              />
            </div>
          </div>
        </Show>
        {/* QuiSocial */}
        <Show className={`project ${index === 4 ? 'project--active' : ''}`}>
          <div className="project__image">
            <img src={contactMock} alt="Projeto Contato App" />
          </div>
          <div className="project__content">
            <h1>Contato App</h1>
            <p>
              Projeto desafio da 5ª Semana do AceleraDev React da Codenation
              que teve como objetivo criar e consumir uma API de contatos
              adicionando funcionalidades de buscar um contato ou ordenar por
              Nome, País, Empresa, Departamento e Data de Admissão em tempo
              real e foi aplicado o conceito de Modularização.
            </p>
            <div className="project__tech">
              <h2>Tecnologias</h2>
              <div className="tech">
                <Tag text="React" />
                <Tag text="JSX" />
                <Tag text="SASS" />
                <Tag text="Shimmer Effect" />
              </div>
            </div>
            <div className="project__links">
            <ExternalLink
              text="Código fonte"
              to="https://github.com/jardelgoncalves/codenation-desafio-5"
              target="_blank"
              rel="noopener noreferrer"
            />
              <ExternalLink
                text="Demo"
                to="https://jardelgoncalves-contacts.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              />
            </div>
          </div>
        </Show>
        {/* Tindev */}
        <Show className={`project ${index === 5 ? 'project--active' : ''}`}>
          <div className="project__image">
            <img src={tindevMock} alt="Projeto Tindev" />
          </div>
          <div className="project__content">
            <h1>Tindev</h1>
            <p>
              Projeto de estudo desenvolvido na 8ª Omnistack da Rocketseat que
              teve como objetivo construir uma aplicação Web e Mobile para
              conectar desenvolvedores. Para acessar a aplicação o usuário
              precisa logar com o seu github e após logado ele poderia dar like
              ou dislike nos Devs. Toda essa interação (Match entre os devs) é
              executada em tempo real.
            </p>
            <div className="project__tech">
              <h2>Tecnologias</h2>
              <div className="tech">
                <Tag text="React" />
                <Tag text="React Native" />
                <Tag text="MongoDB" />
                <Tag text="Mongoose" />
                <Tag text="Express.js" />
                <Tag text="Socket.io" />
              </div>
            </div>
            <div className="project__links">
              <ExternalLink
                text="Código fonte"
                to="https://github.com/jardelgoncalves/tindev"
                target="_blank"
                rel="noopener noreferrer"
              />
            </div>
          </div>
        </Show>
        {/* Todo List */}
        <Show className={`project ${index === 6 ? 'project--active' : ''}`}>
          <div className="project__image">
            <img src={todoMock} alt="Projeto Todo List" />
          </div>
          <div className="project__content">
            <h1>Todo List</h1>
            <p>
              Projeto de estudo que teve como objetivo criar uma aplicação para
              para gerenciar tarefas. O Usuario precisa se cadastrar para
              iniciar o gerenciamento das tarefas. Após logado o mesmo pode
              criar tarefas, excluir, marcar como feita ou filtrar uma tarefa
              específica.
            </p>
            <div className="project__tech">
              <h2>Tecnologias</h2>
              <div className="tech">
                <Tag text="React" />
                <Tag text="PostgreSQL" />
                <Tag text="SQLite" />
                <Tag text="Sequelize" />
                <Tag text="Express.js" />
                <Tag text="Mocha" />
                <Tag text="Chai" />
                <Tag text="Docker" />
                <Tag text="Passport" />
                <Tag text="Passport-jwt" />
              </div>
            </div>
            <div className="project__links">
            <ExternalLink
              text="Código fonte"
              to="https://github.com/jardelgoncalves/app-todo-list"
              target="_blank"
              rel="noopener noreferrer"
            />
            </div>
          </div>
        </Show>
      </Slide>
    </Wrapper>
  );
};


export default ListProject;
