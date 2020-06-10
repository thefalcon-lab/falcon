/** @jsx jsx */
import { jsx, Container, Flex } from 'theme-ui'
import { graphql, Link } from 'gatsby'
import { ProjectHeader, ProjectTags } from '../components/project'
import Layout from '../components/Layout'
import ParsedContent from '../utils/ParsedContent'
import ServiceProjects from '../components/ServiceProjects'
import { FooterGallery } from '../components/templates/templateParts'

const Service = ({ data }) => {
  const {
    title,
    uri,
    content,
    slug,
    serviceFields: { serviceIntro, servicesTags },
    footerGallery: { gallery },
  } = data.wpService

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
      <ProjectHeader title={title} subtitle={serviceIntro} sx={{ pt: 50 }} />

      {/* <ServiceProjects slug={slug} /> */}
      <Container sx={{ maxWidth: 'l', pb: 100, pt: 50 }}>
        <ParsedContent content={content} />
        <Link
          to="/services"
          sx={{ display: 'flex', justifyContent: 'flex-start', pt: 20 }}
        >
          <Link to="services" sx={{ variant: `buttons.primary` }}>
            More Services
          </Link>
        </Link>
      </Container>

      <ProjectTags items={servicesTags} />
      {gallery?.length && <FooterGallery gallery={gallery} />}
    </Layout>
  )
}

export default Service

export const pageQuery = graphql`
  query GET_SERVICE($uri: String!) {
    wpService(uri: { eq: $uri }) {
      title
      content
      slug
      serviceFields {
        serviceIntro
        servicesTags {
          item
        }
      }
      footerGallery {
        gallery {
          ...galleryImageFragment
        }
      }
    }
  }
`
