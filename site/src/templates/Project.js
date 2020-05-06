/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const Project = ({ data }) => {
  const {
    title,
    featuredImage,
    projectFields: { projectImages, projectType, projectSections },
    terms,
  } = data.wpProject

  console.log(data.wpProject)
  return (
    <Layout>
      <h1>{title}</h1>
    </Layout>
  )
}

export default Project

export const pageQuery = graphql`
  query GET_PROJECT($uri: String!) {
    wpProject(uri: { eq: $uri }) {
      title
      projectFields {
        projectType
        projectImages {
          image {
            ...GatsbyImageQuery
          }
        }
        projectSections {
          title
          content
        }
      }
      terms {
        ... on WpProjectCategory {
          name
          slug
        }
      }
      featuredImage {
        ...GatsbyImageQuery
      }
    }
  }
`
