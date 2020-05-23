/** @jsx jsx */
import { jsx, Box, Flex } from 'theme-ui'

import { Link, useStaticQuery, graphql } from 'gatsby'
import moment from 'moment/moment'
import Img from 'gatsby-image'
import normalize from 'normalize-path'

const FEATURED_POSTS = graphql`
  query {
    allWpPost(
      limit: 3
      filter: {
        categories: { nodes: { elemMatch: { slug: { eq: "featured" } } } }
      }
    ) {
      nodes {
        id
        title
        uri
        date
        featuredImage {
          altText
          sourceUrl
          localFile {
            childImageSharp {
              fixed(width: 70, height: 70, quality: 80) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`

export const FeaturedPosts = ({ location, ...props }) => {
  const data = useStaticQuery(FEATURED_POSTS)

  let posts = data.allWpPost.nodes

  return (
    <Box sx={{}} className="widget featuredPosts" {...props}>
      {location === 'sidebar' && (
        <h3 className="widget-title">Popular Posts</h3>
      )}
      <Flex className="postsWrap" sx={{ flexDirection: 'column' }}>
        {posts.length
          ? posts.map((post) => {
              return (
                <Flex
                  className="postItem"
                  key={post.id}
                  sx={{ alignItems: 'center' }}
                >
                  <Link to={post.uri}>
                    {location === 'sidebar' && post.featuredImage && (
                      <Img
                        alt={post.featuredImage.altText}
                        fixed={
                          post.featuredImage.localFile.childImageSharp.fixed
                        }
                      />
                    )}
                  </Link>
                  <div className="textual">
                    <Link className="widget-post-title" to={post.uri}>
                      {post.title}
                    </Link>
                    <Link className="widget-post-date" to={post.uri}>
                      {location === 'sidebar' && (
                        <time
                          className="entry-date"
                          dateTime={post.date}
                          sx={{ display: 'block' }}
                        >
                          {moment(post.date).fromNow()}
                        </time>
                      )}
                    </Link>
                  </div>
                </Flex>
              )
            })
          : null}
      </Flex>
    </Box>
  )
}
