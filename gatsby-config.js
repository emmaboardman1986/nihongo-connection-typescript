require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {

  plugins: [
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `nihongoconnection`,
        accessToken: `${process.env.API_KEY}`,
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
        schemas: {
          homepa: require('./src/schemas/homepa.json'),
          class: require('./src/schemas/class.json'),
        }
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: `${__dirname}/static/fonts/`
      }
    }
  ],
}