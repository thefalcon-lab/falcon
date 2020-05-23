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
import { DateFilter, FeaturedPosts } from '../widgets'

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
      <Spacer sx={{ mb: [50, 100] }} />
      <Flex
        sx={{
          ...sidebarSide,
          flexWrap: [`wrap`, `wrap`, `wrap`, `nowrap`],
          alignItems: `flex-start`,
        }}
      >
        <Box className="posts-list">
          <Grid columns={[1, 2]} gap={25}>
            {filteredPosts.map((post) => (
              <ArchiveItem key={post.id} post={post} sx={{}} />
            ))}
          </Grid>
        </Box>
        <Box className="sidebar" sx={{ ...sidebarStyles }}>
          <Box className="widgets">
            <DateFilter filter={filter} setFilter={setFilter} months={months} />
            <FeaturedPosts location="sidebar" />
          </Box>
        </Box>
      </Flex>
      {!filter && <Pagination ctx={ctx} />}
    </Container>
  )
}

export default ArchiveContent
const sidebarStyles = {
  pl: [0, 0, 0, 70],
  // pt: 50,
  '.widgets': {
    border: '1.4px solid',
    borderColor: 'lightGrey',
    px: 20,
    pt: 30,
  },
  '.widget': {
    pb: 30,
    '&:last-of-type': { pb: 50 },
  },
  '.widget-title': {
    fontFamily: 'bold',
    fontSize: 20,
    pb: 15,
    borderBottom: '1.4px solid',
    borderColor: 'lightGrey',
  },
  '.month': {
    fontSize: 'xs',
    pb: 15,
    fontFamily: 'body',
    fontWeight: 700,
    '&:last-of-type': { pb: 0 },
  },
  '.featuredPosts': {
    '.gatsby-image-wrapper': {
      borderRadius: 50,
    },
    '.postItem': {
      pb: 20,
      '&:last-of-type': { pb: 0 },
    },
    '.textual': {
      pl: 10,
      fontSize: 16,
      '.widget-post-title': {
        color: 'grey',
      },
      time: {
        color: '#C3CCD3',
      },
    },
  },
}
