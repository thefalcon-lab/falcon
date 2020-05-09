/** @jsx jsx */
import { jsx, Container, Box, Button } from 'theme-ui'
import { graphql, Link } from 'gatsby'
import {
  ProjectHeader,
  ProjectGallery,
  ProjectTags,
} from '../components/project'
import Layout from '../components/Layout'
import ParsedContent from '../utils/ParsedContent'

const Service = ({ data }) => {
  const {
    title,
    content,
    serviceFields: { serviceIntro, servicesTags, serviceProjects },
  } = data.wpService
  console.log(serviceProjects)

  return (
    <Layout>
      <ProjectHeader title={title} subtitle={serviceIntro} sx={{ pb: 100 }} />
      {/* <ProjectGallery items={projectImages} /> */}

      <ProjectTags items={servicesTags} />
      <Container sx={{ maxWidth: 'm', py: 100 }}>
        <ParsedContent content={content} />
        <Link
          to="/services"
          sx={{ display: 'flex', justifyContent: 'center', pt: 60 }}
        >
          <Button>More Services</Button>
        </Link>
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
        serviceProjects {
          __typename
          ... on WpProject {
            title
            projectFields {
              projectType
            }
            featuredImage {
              ...GatsbyImageQuery
            }
          }
        }
      }
    }
  }
`
