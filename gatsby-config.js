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
  ],
}