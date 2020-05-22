const config = require('./config')
const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: 'Gatsby theme WordPress Starter Demo',
    description: 'Gatsby starter site for Gatsby Theme Wordpress Theme.',
    author: '@alexadark',
    wordPressUrl: config.wordpressUrl,
    siteUrl: 'https://www.thefalconlab.com/',
    social: [
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/thefalconlab/',
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/company/falcon-design-and-print/',
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-theme-blog-data',
      options: {
        ...config,
      },
    },
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-sass',

    {
      resolve: 'gatsby-plugin-wpcf7',
      options: {
        wordPressUrl: config.wordPressUrl,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    'gatsby-plugin-wordpress-fancybox',
    // {
    //   resolve: 'gatsby-plugin-mailchimp',
    //   options: {
    //     endpoint:
    //       'https://gmail.us20.list-manage.com/subscribe/post?u=264367957087f30a2e5e30279&amp;id=338936df19',
    //   },
    // },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['gobold_boldregular, have_heart_oneregular'],
          urls: ['/fonts/fonts.css'],
        },
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `thefalconlab`,
      },
    },
  ],
}
