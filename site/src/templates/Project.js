/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui'
import { graphql } from 'gatsby'
import {
  ProjectHeader,
  ProjectGallery,
  ProjectSections,
} from '../components/project'
import Layout from '../components/Layout'

const Project = ({ data }) => {
  const {
    title,
    featuredImage,
    projectFields: { projectImages, projectType, projectSections },
    terms,
  } = data.wpProject

  return (
    <Layout>
      <ProjectHeader title={title} subtitle={terms[0].name} />
      <ProjectGallery items={projectImages} />
      <ProjectSections items={projectSections} />
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
