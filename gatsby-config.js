/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `TaskSuite`,
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
    }
  ],
};