/** @jsx jsx */
import { jsx, Container, Flex, Box, Button } from 'theme-ui'
import { useState, Fragment } from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'
import { ProjectHeader } from '../../project'
import { MasonryItem } from '../../ui-components'
import { motion } from 'framer-motion'
import { shuffle } from 'lodash'
import { document } from 'browser-monads'
import { gsap } from 'gsap'
import overlayStyles from '../../../styles/overlayStyles'

const PROJECTS_QUERY = graphql`
  query {
    allWpProject(limit: 1000) {
      nodes {
        projectFields {
          projectType
          height
          bgc
        }
        uri
        title
        projectCategories {
          nodes {
            slug
          }
        }
        featuredImage {
          ...galleryImageFragment
        }
      }
    }
    allWpProjectCategory(sort: { fields: description }) {
      nodes {
        name
        slug
      }
    }
  }
`

export const WorkPage = ({ page, ...props }) => {
  function flip(elements, changeFunc, vars) {
    if (typeof elements === 'string') {
      elements = document.querySelectorAll(elements)
    }
    vars = vars || {}
    var bounds = [],
      tl = gsap.timeline({
        onComplete: vars.onComplete,
        delay: vars.delay || 0,
      }),
      copy = {},
      i,
      b,
      p
    for (i = 0; i < elements.length; i++) {
      bounds[i] = elements[i].getBoundingClientRect()
    }
    changeFunc()
    for (p in vars) {
      if (p !== 'onComplete' && p !== 'delay') {
        copy[p] = vars[p]
      }
    }
    copy.x = function (i, element) {
      return '-=' + (element.getBoundingClientRect().left - bounds[i].left)
    }
    copy.y = function (i, element) {
      return '-=' + (element.getBoundingClientRect().top - bounds[i].top)
    }
    tl.from(elements, copy)
    return tl
  }
  const data = useStaticQuery(PROJECTS_QUERY)

  const filters = data.allWpProjectCategory.nodes

  const [filter, setFilter] = useState(null)

  let projects = data.allWpProject.nodes
  const filteredProjects = projects.filter((project) => {
    return project.projectCategories.nodes
      .map((item) => item.slug)
      .includes(filter)
  })
  projects = filter ? filteredProjects : projects

  const handleSetFilter = (e) => {
    setFilter(e.currentTarget.value)
    // flip('.gridItem', shuffle(projects), { duration: 2 })
  }

  const cleanFilters = (e) => {
    setFilter(null)
  }

  return (
    <Fragment>
      <Container sx={{ ...styles }} {...props}>
        <ProjectHeader title="Our Work" sx={{ mb: 100 }} />
        <Flex className="filters gsReveal" sx={{ ...filtersStyles }}>
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
      <Flex
        sx={{
          flexWrap: 'wrap',
          '>div': { minWidth: ['100%', '50%', '33%', '25%'] },
        }}
      >
        {projects &&
          projects.map((project, i) => {
            const {
              featuredImage,
              projectFields: { projectType, bgc },
              title,
              uri,
            } = project

            return (
              <Flex>
                {featuredImage && (
                  <MasonryItem
                    key={i}
                    height={300}
                    bgc={bgc}
                    img={featuredImage.localFile.publicURL}
                    className="gridItem"
                    sx={{ minWidth: '100%' }}
                  >
                    <Link to={uri}>
                      <Box
                        className="overlay"
                        sx={{
                          ...overlayStyles,
                        }}
                      >
                        <Box className="content">
                          <h3 dangerouslySetInnerHTML={{ __html: title }} />
                          {projectType && (
                            <h4
                              dangerouslySetInnerHTML={{ __html: projectType }}
                            />
                          )}
                        </Box>
                      </Box>
                    </Link>
                  </MasonryItem>
                )}
              </Flex>
            )
          })}
      </Flex>
    </Fragment>
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
