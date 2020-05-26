import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import ogImage from '../../assets/images/og-image.png';

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        author,
        siteUrl,
      }
    }
  }
`;

const SEO = ({
  description,
  lang,
  meta,
  keywords,
  title,
}) => (
  <StaticQuery
    query={detailsQuery}
    render={(data) => (
      <Helmet
        htmlAttributes={{ lang }}
        title={title || data.site.siteMetadata.title}
        titleTemplate={title && `%s | ${data.site.siteMetadata.title}`}
        meta={[
          { name: 'description', content: description },
          { name: 'keywords', content: keywords },
          { name: 'twitter:card', content: 'summary' },
          { name: 'twitter:creator', content: data.site.siteMetadata.author },
          { name: 'twitter:title', content: title },
          { name: 'twitter:description', content: description },
          { property: 'og:title', content: title },
          { property: 'og:description', content: description },
          { property: 'og:type', content: 'website' },
          { property: 'og:url', content: data.site.siteMetadata.siteUrl },
          {
            property: 'og:image',
            content: `${data.site.siteMetadata.siteUrl}${ogImage}`,
          },
          { property: 'og:image:alt', content: description },
          { property: 'og:image:type', content: 'image/png' },
          { property: 'og:image:width', content: '1062' },
          { property: 'og:image:height', content: '719' },
        ].concat(meta)}
      />
    )}
  />
);

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  lang: PropTypes.string.isRequired,
  keywords: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
};

SEO.defaultProps = {
  title: null,
  description: '',
  meta: [],
  keywords: '',
};

export default SEO;
