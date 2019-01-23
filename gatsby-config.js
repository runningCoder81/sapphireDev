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
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
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
