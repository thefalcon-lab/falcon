const createProjects = require(`./create/createProjects`)
const createServices = require(`./create/createServices`)

exports.createPages = async ({ actions, graphql }) => {
  await createProjects({ actions, graphql })
  await createServices({ actions, graphql })
}
