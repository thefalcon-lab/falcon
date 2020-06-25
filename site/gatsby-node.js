const createProjects = require(`./create/createProjects`)
const createServices = require(`./create/createServices`)

const webpack = require('webpack')

exports.createPages = async ({ actions, graphql }) => {
  await createProjects({ actions, graphql })
  await createServices({ actions, graphql })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  new webpack.ProvidePlugin({
    Promise: 'es6-promise-promise',
  })
}
