const lightTheme = require('./theme/default-theme');
const darkTheme = require('./theme/dark-theme');
const resources = require('./i18n.json');

module.exports = {
  siteMetadata: {
    title: 'Personal Info and Blog',
    description: 'Just my awesome blog',
  },
  plugins: [
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: 'posts',
      },
    },
    {
      resolve: `gatsby-emotion-dark-mode`,
      options: {
        light: lightTheme,
        dark: darkTheme,
      },
    },
    {
      resolve: `@3nvi/gatsby-theme-intl`,
      options: {
        supportedLanguages: ['en', 'es'],
        defaultLanguage: 'es',
        i18nextConfig: {
          resources,
        },
      },
    },
  ],
};
