/** @jsx jsx */
import { jsx, Container, Flex } from 'theme-ui'
import { Link } from 'gatsby'

const Breadcrumbs = ({ uri, title, archiveUrl, archiveTitle }) => {
  return (
    <Container sx={{ px: 20 }} sx={{ position: 'relative' }}>
      <Flex
        as="nav"
        className="breadcrumbs"
        sx={{
          position: 'absolute',
          top: -65,
          left: [83, 115],
          fontSize: 14,

          a: {
            color: 'grey',
            mr: 15,
            '&.current,&:hover': { color: 'black' },
          },
          textTransform: 'uppercase',
          fontFamily: 'bold',
        }}
      >
        <Link to={archiveUrl}>{archiveTitle}</Link>
        <Link
          className="current"
          to={uri}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </Flex>
    </Container>
  )
}

export default Breadcrumbs
