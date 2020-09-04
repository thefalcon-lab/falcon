/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { graphql } from 'gatsby'
import { ProjectHeader, ProjectSections } from '../components/project'
import Breadcrumbs from '../components/Breadcrumbs'

import Layout from '../components/Layout'
import Img from 'gatsby-image'

const Project = ({ data }) => {
  const {
    title,
    uri,
    projectFields: { projectSections, topImage },
    terms,
  } = data.wpProject

  return (
    <Layout>
      <Breadcrumbs
        uri={uri}
        title={title}
        archiveUrl="our-work"
        archiveTitle="work"
      />
      <ProjectHeader
        title={title}
        subtitle={terms && terms[0].name}
        className="gsReveal projectSingle"
      />
      {topImage && (
        <Flex
          className="hero"
          sx={{ bg: 'lightGrey', justifyContent: 'center', py: 50, mt: 25 }}
        >
          <Img
            fluid={topImage.localFile.childImageSharp.fluid}
            sx={{ maxWidth: 900 }}
            className="gsReveal"
          />
        </Flex>
      )}

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
        topImage {
          localFile {
            childImageSharp {
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        projectSections {
          title
          content
          images {
            localFile {
              childImageSharp {
                fluid(maxWidth: 900) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
      terms {
        ... on WpProjectCategory {
          name
          slug
        }
      }
      featuredImage {
        localFile {
          publicURL
        }
      }
    }
  }
`
