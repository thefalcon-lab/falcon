/** @jsx jsx */
import { jsx, Container, Flex, Box, Button } from 'theme-ui'
import React, { useState } from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'
import { ProjectHeader } from '../../project'
import { Masonry } from '../../ui-components'
import BgImage from '../../images/BgImage'

const PROJECTS_QUERY = graphql`
  query {
    allWpProject(limit: 1000) {
      nodes {
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
    allWpProjectCategory {
      nodes {
        name
        slug
      }
    }
  }
`

export const WorkPage = ({ page, ...props }) => {
  const data = useStaticQuery(PROJECTS_QUERY)

  const filters = data.allWpProjectCategory.nodes

  const projects = data.allWpProject.nodes
  const [filter, setFilter] = useState(null)

  const handleSetFilter = (e) => {
    setFilter(e.currentTarget.value)
  }

  const cleanFilters = (e) => {
    setFilter(null)
  }

  return (
    <>
      <Container sx={{ ...styles }} {...props}>
        <ProjectHeader title="Our Work" sx={{ mb: 100 }} />
        <Flex className="filters" sx={{ ...filtersStyles }}>
          <Box className="filter" key="all">
            <Button
              variant="invisible"
              value="all"
              dangerouslySetInnerHTML={{ __html: 'all' }}
              onClick={cleanFilters}
            />
          </Box>
          {filters &&
            filters.map((filter) => (
              <Box className="filter" key={filter.slug}>
                <Button
                  variant="invisible"
                  value={filter.slug}
                  dangerouslySetInnerHTML={{ __html: filter.name }}
                  onClick={handleSetFilter}
                />
              </Box>
            ))}
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

const filtersStyles = {
  mb: 50,
  flexWrap: 'wrap',
  justifyContent: ['flex-start', 'flex-start', 'space-between'],
  '.filter': {
    pr: [20, 20, 0],
  },
}
