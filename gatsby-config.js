module.exports = {
  siteMetadata: {
    title: 'Gatsby Storybook Starter',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Jardel',
        short_name: 'Jardel',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#5C3BFE',
        display: 'standalone',
        icon: 'src/assets/logos/icon.svg',
      },
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/`,
        name: 'src',
      },
    },
    'gatsby-plugin-root-import',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
  ],
};
