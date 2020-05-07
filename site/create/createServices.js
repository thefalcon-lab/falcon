const path = require(`path`)
const serviceTemplate = path.resolve(`./src/templates/service.js`)

module.exports = async ({ actions, graphql }) => {
  const GET_SERVICES = `
    query {
      allWpService {
        nodes {
          title
          uri
        }
      }
      }
    `
  const { createPage } = actions

  const servicesQuery = await graphql(GET_SERVICES)

  const services = servicesQuery.data.allWpService.nodes

  services.map((item) => {
    createPage({
      path: `${item.uri}`,
      component: serviceTemplate,
      context: {
        uri: item.uri,
      },
    })
  })
}
