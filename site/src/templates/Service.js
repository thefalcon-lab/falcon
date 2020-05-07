/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui'
import { graphql } from 'gatsby'
import {
  ProjectHeader,
  ProjectGallery,
  ProjectTags,
} from '../components/project'
import Layout from '../components/Layout'

const Service = ({ data }) => {
  const {
    title,
    content,
    serviceFields: { serviceIntro, servicesTags },
  } = data.wpService

  return (
    <Layout>
      <ProjectHeader title={title} subtitle={serviceIntro} />
      {/* <ProjectGallery items={projectImages} /> */}

      <ProjectTags items={servicesTags} />
      <Container sx={{ maxWidth: 'm' }}>
        <Box></Box>
      </Container>
    </Layout>
  )
}

export default Service

export const pageQuery = graphql`
  query GET_SERVICE($uri: String!) {
    wpService(uri: { eq: $uri }) {
      title
      content
      serviceFields {
        serviceIntro
        servicesTags {
          item
        }
        # serviceProjects {
        #   __typename
        #   ... on WpProject {
        #     title
        #     projectFields {
        #       projectType
        #     }
        #     featuredImage {
        #       ...GatsbyImageQuery
        #     }
        #   }
        # }
      }
    }
  }
`
