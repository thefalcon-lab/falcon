/** @jsx jsx */
import { jsx } from 'theme-ui'
import PostEntryTitle from './PostEntryTitle'
import PostEntryContent from './PostEntryContent'
import gutenberg from '../../styles/theme-gutenberg'
import { Spacer } from '../ui-components'
import Date from './Date'

const PostEntry = ({ post, location }) => {
  const subtitle = post.postSubtitle.postSubtitle
  return (
    <article className="entry">
      <div className={`content `}>
        <Date date={post.date} sx={{ fontSize: 15, mb: 20 }} />
        <PostEntryTitle
          location={location}
          post={post}
          className="entry-title"
        />
        <Spacer />
        {subtitle && (
          <div
            className="subtitle"
            dangerouslySetInnerHTML={{ __html: subtitle }}
            sx={{
              fontFamily: 'bold',
              textTransform: 'uppercase',
              fontSize: 'l',
              py: 30,
            }}
          />
        )}

        <div id="content" sx={{ ...gutenberg }}>
          <PostEntryContent
            location={location}
            post={post}
            className="entry-content"
          />
        </div>
      </div>
    </article>
  )
}

export default PostEntry
