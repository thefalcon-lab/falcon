/** @jsx jsx */
import { jsx, Container, Flex, Box, Button } from 'theme-ui'
import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'
import { MasonryItem } from '../../ui-components'
import overlayStyles from '../../../styles/overlayStyles'
import { motion } from 'framer-motion'

const TOP_PROJECTS_QUERY = graphql`
  query {
    wpPage(slug: { eq: "home" }) {
      featuredProjects {
        topProjects {
          ... on WpProject {
            title
            uri
            projectFields {
              projectType
              height
              bgc
            }
            featuredImage {
              localFile {
                publicURL
              }
            }
          }
        }
      }
    }
  }
`

export const TopProjects = () => {
  const data = useStaticQuery(TOP_PROJECTS_QUERY)
  const projects = data.wpPage.featuredProjects.topProjects

  return (
    <Flex
      sx={{
        flexWrap: 'wrap',
        '>div': { width: ['100%', '50%', '33%', '25%'] },
      }}
    >
      {projects?.map((project, i) => {
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
                        <h4 dangerouslySetInnerHTML={{ __html: projectType }} />
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
  )
}
