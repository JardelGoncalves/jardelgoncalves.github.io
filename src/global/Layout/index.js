import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import GlobalStyle from '../GlobalStyle';
import SEO from '../SEO';
import { Wrapper } from './styles';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Helmet>
          <title>{data.site.siteMetadata.title}</title>
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta
            name="google-site-verification"
            content="jBVmqPj11HBOz3mFElOh_pjysg3Anv-ON8UwyXTGPys"
          />
        </Helmet>
        <SEO
          lang="pt-BR"
          description="Desenvolvedor Full-Stack e Mobile"
          keywords="React, React Native, Node, Node.js, Javascript,
          Desenvolvedor Frontend, Frontend, Desenvolvedor Backend,
          Backend, MongoDB, PostgreSQL, TypeScript, Gatsby, Next.js"
        />
        <GlobalStyle />
        <Wrapper>
          {children}
        </Wrapper>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
