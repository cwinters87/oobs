require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: `Tasksuite | Loan Management, Origination, Servicing, and Credit Software`,
    description: `TASKSUITE combines 4 powerful systems into a single product, enabling lenders to streamline their operations. Request a Demo`,
    image: `./static/tasksuite.jpeg`,
    siteUrl: `https://www.tasksuite.com`,
    robots: `placeholderobot`,
    noIndex: `placeholderindex`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        //production gtm-tag below
        id: "GTM-WXTCT9W",

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },

        // Defaults to gatsby-route-change
        // routeChangeEventName: "gatsby-route-change",
        // Defaults to false
        enableWebVitalsTracking: true,
        // Defaults to https://www.googletagmanager.com
        // selfHostedOrigin: "YOUR_SELF_HOSTED_ORIGIN",
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        // name: 'TaskSuite',
        // short_name: 'TaskSuite',
        // start_url: '/',
        // background_color: '#1D1B1B',
        // theme_color: '#a2466c',
        // display: 'standalone',
        icon: "src/images/favicon/favicon2.svg",
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `@emotion/babel-plugin`,
    // Plug in tracking ID for google analytics below...

    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [
    //       `arvo`,
    //       `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
    //     ],
    //     display: 'swap'
    //   }
    // },
    // {
    //   resolve: "gatsby-omni-font-loader",
    //   options: {
    //     enableListener: true,
    //     preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
    //     web: [
    //       {
    //         name: `Roboto`,
    //         file: `https://fonts.googleapis.com/css2?family=Roboto&display=swap`,
    //       },
    //     ],
    //   },
    // },
    // {
    //   resolve: `gatsby-source-rest-api`,
    //   options: {
    //     endpoints: [
    //       'http://localhost:3000/data',
    //     ],
    //   },
    // },
    // Favicon change below
  ],
  trailingSlash: "never",
}
