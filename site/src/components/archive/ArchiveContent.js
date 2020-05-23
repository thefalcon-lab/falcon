/** @jsx jsx */
import { jsx, Container, Flex, Box, Grid, Button } from 'theme-ui'
import { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ArchiveItem from './ArchiveItem'
import Pagination from './Pagination'
import useThemeOptions from 'gatsby-theme-blog-data/src/hooks/useThemeOptions'

import { Spacer } from '../ui-components'
import moment from 'moment/moment'
import uniq from 'lodash/uniq'
import { DateFilter } from '../widgets'

const ArchiveContent = ({ posts, ctx, paginationPrefix, name }) => {
  const { layoutWidth, archiveSidebar, sidebarWidgets } = useThemeOptions()
  const data = useStaticQuery(graphql`
    query {
      allWpPost(limit: 10000) {
        nodes {
          title
          date
          featuredImage {
            ...ImageFluidFragment
          }
          excerpt
        }
      }
    }
  `)
  const allPosts = data.allWpPost.nodes
  const getMonth = (date) => moment(date).format(`MMMM YYYY`)
  const months = uniq(allPosts.map((post) => getMonth(post.date))).slice(0, 4)

  const [filter, setFilter] = useState(null)

  const filteredPosts = filter
    ? allPosts.filter((post) => {
        let postMonth = getMonth(post.date)
        postMonth = months.includes(postMonth) ? postMonth : 'older'
        return postMonth === filter
      })
    : posts

  const containerStyles =
    sidebarWidgets && archiveSidebar
      ? {
          '.posts-list': {
            width: [`100%`, `100%`, `100%`, `70%`],
          },
          '.sidebar': { width: [`100%`, `100%`, `100%`, `30%`] },
        }
      : { maxWidth: layoutWidth.archive }

  const sidebarSide =
    sidebarWidgets && archiveSidebar
      ? archiveSidebar === `left`
        ? {
            flexDirection: `row-reverse`,
            '.posts-list': { pl: [0, 0, 0, layoutWidth.archive] },
          }
        : { '.posts-list': { pr: [0, 0, 0, layoutWidth.archive] } }
      : ''
  return (
    <Container sx={{ ...containerStyles }} className="mainContainer">
      <h1 sx={{ fontSize: 100 }}>BLOG</h1>
      <Flex
        sx={{
          ...sidebarSide,
          flexWrap: [`wrap`, `wrap`, `wrap`, `nowrap`],
          alignItems: `flex-start`,
        }}
      >
        <Box className="posts-list">
          <Spacer />
          <Grid columns={[1, 2]} gap={25}>
            {filteredPosts.map((post) => (
              <ArchiveItem key={post.id} post={post} sx={{}} />
            ))}
          </Grid>
        </Box>
        <Box className="sidebar" sx={{ ...sidebarStyles }}>
          <DateFilter filter={filter} setFilter={setFilter} months={months} />
        </Box>
      </Flex>
      {!filter && <Pagination ctx={ctx} />}
    </Container>
  )
}

export default ArchiveContent
const sidebarStyles = {}
