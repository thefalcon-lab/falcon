/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui'
import { graphql } from 'gatsby'
import { ProjectHeader, ProjectSections } from '../components/project'
import { Masonry, MasonryItem } from '../components/ui-components'
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
      <Masonry minWidth={500}>
        {projectImages &&
          projectImages.map((item, i) => {
            const { height, bgc, image } = item
            return (
              <MasonryItem
                key={i}
                height={height}
                bgc={bgc}
                img={image.localFile.publicURL}
              />
            )
          })}
      </Masonry>

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
          bgc
          height
          image {
            localFile {
              publicURL
            }
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
        localFile {
          publicURL
        }
      }
    }
  }
`
