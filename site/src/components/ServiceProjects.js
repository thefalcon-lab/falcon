/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby'
import { Masonry, MasonryItem } from './ui-components'
import overlayStyles from '../styles/overlayStyles'

const PROJECTS_QUERY = graphql`
  query {
    allWpProject(limit: 1000) {
      nodes {
        title
        featuredImage {
          localFile {
            publicURL
          }
        }
        projectCategories {
          nodes {
            slug
          }
        }
        projectFields {
          projectType
          bgc
          height
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
            projectFields: { projectType, height, bgc },
            title,
          } = project

          return (
            <>
              {featuredImage && (
                <MasonryItem
                  key={i}
                  height={height}
                  bgc={bgc}
                  img={featuredImage.localFile.publicURL}
                >
                  {/* <Link to={uri}> */}
                  <Box
                    className="overlay"
                    sx={{
                      ...overlayStyles,
                    }}
                  >
                    <Box className="content">
                      <h3 dangerouslySetInnerHTML={{ __html: title }} />
                      {projectType && (
                        <h4 dangerouslySetInnerHTML={{ __html: projectType }} />
                      )}
                    </Box>
                  </Box>
                  {/* </Link> */}
                </MasonryItem>
              )}
            </>
          )
        })}
    </Masonry>
  )
}

export default ServiceProjects
