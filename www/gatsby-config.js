require("dotenv").config()

const isProd = process.env.NODE_ENV === "production"

module.exports = {
  siteMetadata: {
    title: `dotlocal`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.PROJECT_ID,
        dataset: process.env.DATASET,
        token: process.env.SANITY_TOKEN,
        overlayDrafts: !isProd,
        watchMode: !isProd,
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
        icon: `src/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Miriam Libre`,
    //         variants: [`400`, `700`],
    //       },
    //       {
    //         family: `Open Sans`,
    //         variants: [`400`, `700`],
    //       },
    //     ],
    //   },
    // },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] },
    },
    {
      resolve: `gatsby-plugin-firebase`,
      options: {
        features: {
          auth: true,
          database: false,
          firestore: false,
          storage: false,
          messaging: false,
          functions: false,
          performance: false,
        },
        credentials: {
          apiKey: process.env.FB_API_KEY,
          authDomain: process.env.FB_AUTH_DOMAIN,
          databaseURL: process.env.FB_DB_URL,
          projectId: process.env.FB_PROJECT_ID,
          storageBucket: process.env.FB_STORAGE_BUCKET,
          messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
          appId: process.env.FB_APP_ID,
          measurementId: process.env.FB_MEASUREMENT_ID,
        },
      },
    },
    `@lmack/sanity-heroku-preview`,
  ],
}
