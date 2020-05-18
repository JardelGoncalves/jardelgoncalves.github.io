import React from 'react';
import config from 'react-reveal/globals';

import Layout from '../global/Layout';
import Header from '../components/Header';
import TabBottom from '../components/TabBottom';

import {
  Hero,
  Skills,
  Services,
  Projects,
  Timeline,
  Contact,
} from '../section';

config({ ssrFadeout: true });


const IndexPage = () => (
    <Layout>
      <Header />
      <Hero />
      <Skills id="skills" />
      <Services id="services" />
      <Projects id="projects" />
      <Timeline id="timeline" />
      <Contact id="contact" />
      <TabBottom />
    </Layout>
  );

export default IndexPage;
