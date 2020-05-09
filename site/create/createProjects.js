const path = require(`path`)
const projectTemplate = path.resolve(`./src/templates/Project.js`)

module.exports = async ({ actions, graphql }) => {
  const GET_PROJECTS = `
    query {
      allWpProject {
        nodes {
          title
          uri
        }
      }
      }
    `
  const { createPage } = actions

  const projectsQuery = await graphql(GET_PROJECTS)

  const projects = projectsQuery.data.allWpProject.nodes

  projects.map((item) => {
    createPage({
      path: `${item.uri}`,
      component: projectTemplate,
      context: {
        uri: item.uri,
      },
    })
  })
}
