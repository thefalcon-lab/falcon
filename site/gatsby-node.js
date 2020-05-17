const createProjects = require(`./create/createProjects`)
const createServices = require(`./create/createServices`)

exports.createPages = async ({ actions, graphql }) => {
  await createProjects({ actions, graphql })
  await createServices({ actions, graphql })
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /ScrollMagicPluginGsap/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
