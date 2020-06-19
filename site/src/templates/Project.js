/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { graphql } from 'gatsby'
import { ProjectHeader, ProjectSections } from '../components/project'
import { useGsapReveal } from '../hooks'

import Layout from '../components/Layout'
import Img from 'gatsby-image'

const Project = ({ data }) => {
  const {
    title,
    featuredImage,
    projectFields: { projectType, projectSections, topImage },
    terms,
  } = data.wpProject

  useGsapReveal(75, 2, ['.gsReveal', '.title', '.content'])

  return (
    <Layout>
      <ProjectHeader
        title={title}
        subtitle={terms && terms[0].name}
        className="gsReveal"
      />
      {topImage && (
        <Flex
          className="hero gsReveal"
          sx={{ bg: 'lightGrey', justifyContent: 'center', py: 50, mt: 25 }}
        >
          <Img
            fluid={topImage.localFile.childImageSharp.fluid}
            sx={{ maxWidth: 900 }}
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
                fluid(maxWidth: 600) {
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
