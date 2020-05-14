/** @jsx jsx */
import { jsx, Container, Flex, Box } from 'theme-ui'
import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'
import { ProjectHeader } from '../../project'
import { Masonry } from '../../ui-components'
import BgImage from '../../images/BgImage'

const PROJECTS_QUERY = graphql`
  query {
    allWpProject(limit: 1000) {
      nodes {
        projectCategories {
          nodes {
            name
            slug
          }
        }

        projectFields {
          projectType
        }
        uri
        title
        featuredImage {
          ...galleryImageFragment
        }
      }
    }
  }
`

export const WorkPage = ({ page, ...props }) => {
  const data = useStaticQuery(PROJECTS_QUERY)
  // const {
  //   projectCategories,
  //   projectFields: { projectType },
  //   title,
  //   uri,
  //   featuredImage,
  // } = data.allWpProject.nodes

  const projects = data.allWpProject.nodes
  const filters = []
  // filters = projects.map((item) =>
  //   item.projectCategories.nodes.map((cat) => {
  //     return filters.push([cat.name, cat.slug])
  //   })
  // )
  // console.log('filters', filters)

  // const filters = projectCategories.nodes
  return (
    <>
      <Container sx={{ ...styles }} {...props}>
        <ProjectHeader title="Our Work" sx={{ mb: 100 }} />
        <Flex className="filters">
          {/* {filters &&
          filters.map((filter, i) => (
            <Box key={i} dangerouslySetInnerHTML={{ __html: filter.name }} />
          ))} */}
        </Flex>
      </Container>
      <Masonry minWidth={500}>
        {projects &&
          projects.map((project, i) => {
            const {
              featuredImage,
              projectFields: { projectType },
              title,
              uri,
            } = project
            const {
              aspectRatio,
            } = featuredImage.localFile.childImageSharp.fluid

            const minHeight = 500 / aspectRatio
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
                }}
              ></BgImage>
            )
          })}
      </Masonry>
    </>
  )
}

const styles = {
  mt: 100,
  maxWidth: 'l',
  position: 'relative',
}
