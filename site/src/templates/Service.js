/** @jsx jsx */
import { jsx, Container, Flex } from 'theme-ui'
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
    uri,
    content,
    serviceFields: { serviceIntro, servicesTags, serviceProjects },
  } = data.wpService
  console.log(serviceProjects)

  return (
    <Layout>
      <Container sx={{ px: 20 }} sx={{ position: 'relative' }}>
        <Flex
          as="nav"
          className="breadcrumbs"
          sx={{
            position: 'absolute',
            top: -65,
            left: [83, 115],
            fontSize: 14,

            a: {
              color: 'grey',
              mr: 15,
              '&.current,&:hover': { color: 'black' },
            },
            textTransform: 'uppercase',
            fontFamily: 'bold',
          }}
        >
          <Link to="services">Services</Link>
          <Link
            className="current"
            to={uri}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </Flex>
      </Container>
      <ProjectHeader
        title={title}
        subtitle={serviceIntro}
        sx={{ pb: 100, pt: 50 }}
      />
      {/* <ProjectGallery items={projectImages} /> */}

      <ProjectTags items={servicesTags} />
      <Container sx={{ maxWidth: 'm', py: 100 }}>
        <ParsedContent content={content} />
        <Link
          to="/services"
          sx={{ display: 'flex', justifyContent: 'center', pt: 60 }}
        >
          <Link to="services" sx={{ variant: `buttons.primary` }}>
            More Services
          </Link>
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
