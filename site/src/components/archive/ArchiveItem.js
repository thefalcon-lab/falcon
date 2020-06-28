/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import Date from '../post/Date'
import PostEntryTitle from '../post/PostEntryTitle'
import Image from '../images/Image'
import PostEntryContent from '../post/PostEntryContent'

const ArchiveItem = ({ post, ...props }) => {
  const { featuredImage, date } = post
  return (
    <Box sx={{ ...styles }} {...props}>
      <PostEntryTitle post={post} />
      <Date date={date} />
      <Box className="entry-media">
        <Image img={featuredImage} />
      </Box>
      <PostEntryContent post={post} />
    </Box>
  )
}

export default ArchiveItem
const styles = {
  '.entry-title': {
    textAlign: 'center',
    fontSize: 30,
    mb: 0,
    a: {
      color: 'black',
      '&:hover': {
        color: 'primary',
      },
    },
  },
  '.date': {
    textAlign: 'center',
    mb: 15,
    fontSize: 'xs',
  },
  '.entry-media': {
    mb: 15,
  },
}
