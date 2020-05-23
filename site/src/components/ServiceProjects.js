/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby'
import { Masonry } from './ui-components'
import BgImage from './images/BgImage'

const PROJECTS_QUERY = graphql`
  query {
    allWpProject(limit: 100) {
      nodes {
        title
        featuredImage {
          ...galleryImageFragment
        }
        projectCategories {
          nodes {
            slug
          }
        }
        projectFields {
          projectType
        }
      }
    }
  }
`

const ServiceProjects = ({ slug, ...props }) => {
  const data = useStaticQuery(PROJECTS_QUERY)
  const allProjects = data.allWpProject.nodes
  const projects = allProjects.filter((project) =>
    project.projectCategories.nodes.map((cat) => cat.slug).includes(slug)
  )

  return (
    <Masonry minWidth={500}>
      {projects &&
        projects.map((project, i) => {
          const {
            featuredImage,
            projectFields: { projectType },
            title,
            uri,
          } = project
          const { aspectRatio } = featuredImage.localFile.childImageSharp.fluid

          const minHeight = aspectRatio < 1 ? 500 / aspectRatio : 200
          console.log('feat', aspectRatio, minHeight)

          return (
            <BgImage
              img={featuredImage}
              className="bgImage"
              key={i}
              sx={{
                minHeight,
                display: 'grid',
                backgroundSize: 'fit !important',
                transition: 0.4,
              }}
            ></BgImage>
          )
        })}
    </Masonry>
  )
}

export default ServiceProjects
