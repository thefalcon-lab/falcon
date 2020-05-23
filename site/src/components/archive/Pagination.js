/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import paginationStyles from '../../styles/paginationStyles'

const renderPreviousLink = (previousPagePath) => {
  if (previousPagePath) {
    return (
      <Link className="newer" to={previousPagePath} sx={paginationStyles.links}>
        <span>Previous</span>
      </Link>
    )
  } else {
    return <span />
  }
}

const renderNextLink = (nextPagePath) => {
  if (nextPagePath) {
    return (
      <Link className="older" sx={paginationStyles.links} to={nextPagePath}>
        <span>Next</span>
      </Link>
    )
  } else {
    return <span />
  }
}

const Pagination = ({ ctx, ...props }) => {
  const { humanPageNumber, nextPagePath, previousPagePath } = ctx
  // return empty string if there is only one page
  if (humanPageNumber === 1 && !nextPagePath) {
    return ''
  }
  return (
    <nav sx={paginationStyles} {...props}>
      {renderPreviousLink(previousPagePath)}
      <span
        aria-current="page"
        className="page-numbers current"
        sx={{
          // bg: 'black',
          // color: 'white',
          fontFamily: 'heading',
          fontWeight: 'bold',
          fontSize: 'm',
          maxWidth: 25,
          height: 25,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 50,
          p: 0,
          lineHeight: 1,
          textAlign: 'center',
        }}
      >
        {humanPageNumber}
      </span>
      {renderNextLink(nextPagePath)}
    </nav>
  )
}

export default Pagination
