/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Masonry, MasonryItem } from './ui-components'
import BgImage from './images/BgImage'

const PROJECTS_QUERY = graphql`
  query {
    allWpProject(limit: 100) {
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
            uri,
          } = project
          console.log('project', project, bgc, height)

          return (
            <>
              {featuredImage && (
                <MasonryItem
                  key={i}
                  height={height}
                  bgc={bgc}
                  img={featuredImage.localFile.publicURL}
                />
              )}
            </>
          )
        })}
    </Masonry>
  )
}

export default ServiceProjects
