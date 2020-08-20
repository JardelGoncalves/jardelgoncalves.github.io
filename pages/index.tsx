import React from 'react';
import { Layout } from '../src/components';
import { Hero, About } from '../src/containers';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  );
}
