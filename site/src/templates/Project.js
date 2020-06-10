/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui'
import { graphql } from 'gatsby'
import { ProjectHeader, ProjectSections } from '../components/project'
import { Masonry, MasonryItem } from '../components/ui-components'
import BgImage from '../components/images/BgImage'
import Layout from '../components/Layout'

const Project = ({ data }) => {
  const {
    title,
    featuredImage,
    projectFields: { projectImages, projectType, projectSections, width },
    terms,
  } = data.wpProject

  return (
    <Layout>
      <ProjectHeader title={title} subtitle={terms && terms[0].name} />
      {projectImages && (
        <Masonry minWidth={500}>
          {projectImages.map((item, i) => {
            const { height, image } = item
            console.log('img', image)
            return (
              <BgImage
                img={image}
                className="bgImage"
                key={i}
                sx={{
                  minHeight: height,
                  display: 'grid',
                  backgroundSize: 'fit !important',
                  transition: 0.4,
                }}
              ></BgImage>
            )
          })}
        </Masonry>
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
        width
        projectImages {
          height
          image {
            ...galleryImageFragment
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
