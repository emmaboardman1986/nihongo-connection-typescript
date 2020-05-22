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
          homepa: require("./src/schemas/homepa.json"),
          class: require("./src/schemas/class.json"),
          explore_page: require("./src/schemas/explore_page.json"),
          top_navigation: require("./src/schemas/top_navigation.json"),
          about_us: require("./src/schemas/about_us.json"),
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: `${__dirname}/static/fonts/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/static/`,
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://nihongoscotland.us16.list-manage.com/subscribe/post?u=17e930ef2f11232d3ac0dca1e&amp;id=200df291c9',
      },
    },
  ],
}
