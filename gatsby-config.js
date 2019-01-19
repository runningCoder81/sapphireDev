module.exports = {
  siteMetadata: {
    title: `Sapphire Development`,
    description: `This is a Headless WordPress site created with Gatsby.js.`,
    author: `Bobby Lee`,
  },
  plugins: [
    'gatsby-plugin-netlify',
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Raleway:300,400,600', 'Open Sans:400'],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'sapphireapi.com/sapphiredev/',
        protocol: 'https',
        hostingWPCOM: false,
        useACF: true,
      },
    },
  ],
}
