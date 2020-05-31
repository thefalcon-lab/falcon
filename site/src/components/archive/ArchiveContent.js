/** @jsx jsx */
import { jsx, Container, Flex, Box, Grid } from 'theme-ui'
import { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ArchiveItem from './ArchiveItem'
import Pagination from './Pagination'
import useThemeOptions from 'gatsby-theme-blog-data/src/hooks/useThemeOptions'

import { Spacer } from '../ui-components'
import moment from 'moment/moment'
import uniq from 'lodash/uniq'
import Sidebar from '../Sidebar'

const ArchiveContent = ({ posts, ctx }) => {
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

  const containerStyles = {
    maxWidth: 1100,
    '.posts-list': {
      width: [`100%`, `100%`, `100%`, `70%`],
    },
    '.sidebar': { width: [`100%`, `100%`, `100%`, `30%`] },
  }

  return (
    <Container sx={{ ...containerStyles, pb: 50 }} className="mainContainer">
      <h1 sx={{ fontSize: [50, 80] }}>BLOG</h1>
      <Spacer sx={{ mb: [50, 100] }} />
      <Flex
        sx={{
          flexWrap: [`wrap`, `wrap`, `wrap`, `nowrap`],
          alignItems: `flex-start`,
        }}
      >
        <Box className="posts-list">
          <Flex sx={{ flexWrap: 'wrap' }}>
            {filteredPosts.map((post) => (
              <ArchiveItem
                key={post.id}
                post={post}
                sx={{
                  width: ['100%', '100%', '50%'],
                  px: [0, 0, 12.5],
                  pb: 25,
                  '&:nth-child(even)': { pr: 0 },
                  '&:nth-child(odd)': { pl: 0 },
                }}
              />
            ))}
          </Flex>
        </Box>
        <Sidebar
          filter={filter}
          setFilter={setFilter}
          months={months}
          location="archive"
        />
      </Flex>
      {!filter && <Pagination ctx={ctx} sx={{ py: 50 }} />}
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
        '&:hover': {
          color: 'primary',
        },
      },
      time: {
        color: '#C3CCD3',
      },
    },
  },
}
