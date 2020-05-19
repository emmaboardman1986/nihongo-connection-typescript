const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
      query {
        allPrismicClass {
            edges {
              node {
                uid
              }
            }
          }
      }
    `)
    result.data.allPrismicClass.edges.forEach(({ node }) => {
        createPage({
          path: node.uid,
          component: path.resolve(`./src/templates/class.tsx`),
          context: {
            uid: node.uid
          },
        })
      })
  }