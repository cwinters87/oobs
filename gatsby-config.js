/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Tasksuite | Loan Management, Origination, Servicing, and Credit Software`,
    description: `TASKSUITE combines 4 powerful systems into a single product, enabling lenders to streamline their operations. Request a Demo`,
    image: `./static/tasksuite.png`,
    siteUrl: `https://www.tasksuite.com`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-NSM4JNTBE1", // Google Analytics / GA
          "GT-PL3R76C",
          "AW-10996819530", // Google Ads / Adwords / AW

          // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
          // "DC-FLOODIGHT_ID",

        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        // gtagConfig: {
        //   optimize_id: "OPT_CONTAINER_ID",
        //   anonymize_ip: true,
        //   cookie_expires: 0,
        // },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          // exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Defaults to https://www.googletagmanager.com
          // origin: "YOUR_SELF_HOSTED_ORIGIN",
          // Delays processing pageview events on route update (in milliseconds)
          // delayOnRouteUpdate: 0,
        },
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 100,
          
        }
      }
    },
    `gatsby-transformer-sharp`,
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
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Roboto`,
            file: `https://fonts.googleapis.com/css2?family=Roboto&display=swap`,
          },
        ],
      },
    },
    // Favicon change below
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        // name: 'TaskSuite',
        // short_name: 'TaskSuite',
        // start_url: '/',
        // background_color: '#1D1B1B',
        // theme_color: '#a2466c',
        // display: 'standalone',
        icon: 'src/images/favicon/tasksuite.gif',
      },
    }
  ],
};