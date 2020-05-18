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
    console.log(JSON.stringify(result, null, 4))
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