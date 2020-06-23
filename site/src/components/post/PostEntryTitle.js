/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Fragment } from 'react'
import { Link } from 'gatsby'

const PostEntryTitle = ({ post, location }) => {
  const { title, uri } = post

  return (
    <Fragment>
      {location === 'single' ? (
        <h1
          className="entry-title gsReveal"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      ) : (
        <h2 className="entry-title gsReveal">
          <Link to={`/${uri}`} dangerouslySetInnerHTML={{ __html: title }} />
        </h2>
      )}
    </Fragment>
  )
}

export default PostEntryTitle
