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
  
  // Plug in tracking ID for google analytics below...
  plugins: [{
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        "trackingId": "tracking_id_here"
      },
    },
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