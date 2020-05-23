/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import { DateFilter, FeaturedPosts } from './widgets'

const Sidebar = ({ filter, setFilter, months, location, ...props }) => {
  return (
    <Box className="sidebar" sx={{ ...sidebarStyles }} {...props}>
      <Box className="widgets">
        {location === 'archive' && (
          <DateFilter filter={filter} setFilter={setFilter} months={months} />
        )}
        <FeaturedPosts location={location} />
      </Box>
    </Box>
  )
}

export default Sidebar

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
