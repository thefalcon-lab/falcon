const createProjects = require(`./create/createProjects`)
const createServices = require(`./create/createServices`)

exports.createPages = async ({ actions, graphql }) => {
  await createProjects({ actions, graphql })
  await createServices({ actions, graphql })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.md$/,
          loaders: ['html-loader'],
        },
        {
          test: /\.html$/,
          loader: 'html-loader',
          options: {
            minimize: false,
          },
        },
      ],
    },
  })
}
