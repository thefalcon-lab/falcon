/** @jsx jsx */
import { jsx, Container, Flex } from 'theme-ui'
import Layout from '../Layout'
import SEO from '../seo/Seo'
import PostEntry from '../../components/post/PostEntry'
import CommentsList from '../../components/comments/CommentsList'
import { DiscussionEmbed } from 'disqus-react'
import useThemeOptions from 'gatsby-theme-blog-data/src/hooks/useThemeOptions'
import normalize from 'normalize-path'
import Sidebar from '../Sidebar'

const Post = ({ post }) => {
  const { title, excerpt, slug, featuredImage, uri } = post
  const media = featuredImage
    ? featuredImage.localFile.childImageSharp.fluid.src
    : null
  const { layoutWidth } = useThemeOptions()
  const { addWordPressComments } = useThemeOptions()

  const containerStyles = {
    maxWidth: 1050,
    '.entry': {
      width: [`100%`, `100%`, `100%`, `70%`],
    },
    '.sidebar': { width: [`100%`, `100%`, `100%`, `30%`] },
  }

  return (
    <Layout page={post} type="post">
      <SEO
        title={title}
        description={excerpt}
        media={media}
        ogType="article"
        ogUrl={normalize(`/${uri}`)}
      />
      <Container sx={{ ...containerStyles }} className="mainContainer">
        <Flex
          sx={{
            flexWrap: [`wrap`, `wrap`, `wrap`, `nowrap`],
            alignItems: `flex-start`,
          }}
        >
          <PostEntry post={post} location="single" />
          <Sidebar className="sidebar" sx={{ pt: [0, 0, 0, 160] }} />
        </Flex>
        {addWordPressComments && post.commentStatus === 'open' && (
          <Container sx={{ maxWidth: layoutWidth.post }}>
            <CommentsList post={post} />
          </Container>
        )}
      </Container>
    </Layout>
  )
}

export default Post
