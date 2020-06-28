/** @jsx jsx */
import { jsx, Container, Flex } from 'theme-ui'
import { graphql, Link } from 'gatsby'
import { ProjectHeader, ProjectTags } from '../components/project'
import Layout from '../components/Layout'
import ParsedContent from '../utils/ParsedContent'
import { FooterGallery } from '../components/templates/templateParts'

const Service = ({ data }) => {
  const {
    title,
    uri,
    content,
    serviceFields: { serviceIntro, servicesTags, serviceCta },
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
        <div className="gsReveal" sx={{ mb: 40 }}>
          <ParsedContent content={content} />
        </div>

        <Link
          to={serviceCta ? serviceCta.url : 'contact'}
          sx={{ variant: `buttons.primary` }}
        >
          {serviceCta ? serviceCta.title : 'contact us'}
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
        serviceCta {
          title
          url
        }
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
