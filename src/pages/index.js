import React from 'react';
import config from 'react-reveal/globals';

import Layout from '../global/Layout';
import SEO from '../global/SEO';
import Header from '../components/Header';
import TabBottom from '../components/TabBottom';

import {
  Hero,
  Skills,
  Libraries,
  Projects,
  Timeline,
  Contact,
} from '../section';

config({ ssrFadeout: true });


const IndexPage = () => (
    <Layout>
      <SEO
        lang="pt-BR"
        description="Sou desenvolvedor Full-Stack e Mobile"
        keywords="React, React Native, Node, Node.js, Javascript,
        Desenvolvedor Frontend, Frontend, Desenvolvedor Backend,
        Backend, MongoDB, PostgreSQL, TypeScript, Gatsby, Next.js,
        Jardel, Jardel Gonçalves"
      />
      <Header />
      <Hero />
      <Skills id="skills" />
      <Projects id="projects" />
      <Libraries id="libraries" />
      <Timeline id="timeline" />
      <Contact id="contact" />
      <TabBottom />
    </Layout>
  );

export default IndexPage;
