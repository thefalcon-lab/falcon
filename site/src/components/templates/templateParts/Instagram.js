/** @jsx jsx */
import { jsx, Box, Flex } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import BgImage from '../../images/BgImage'

export const Instagram = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allInstaNode(limit: 8) {
        nodes {
          localFile {
            publicURL
            childImageSharp {
              fluid(maxWidth: 600, quality: 80) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      }
    }
  `)

  const posts = data.allInstaNode && data.allInstaNode.nodes

  return (
    <Flex id="instagram" sx={{ flexWrap: 'wrap' }}>
      {posts &&
        posts.map((post, i) => (
          <Box
            key={i}
            className="itemContainer"
            sx={{ width: ['100%', '50%', '25%'], p: 1 }}
          >
            <BgImage
              img={post}
              className="item"
              sx={{ minHeight: 385 }}
            ></BgImage>
          </Box>
        ))}
    </Flex>
  )
}
