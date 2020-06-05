/** @jsx jsx */
import { jsx, Grid, Box, Flex } from 'theme-ui'
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
                aspectRatio
                src
                srcSet
                sizes
              }
            }
          }
        }
      }
    }
  `)

  const { nodes } = data.allInstaNode

  return (
    <Flex id="instagram" sx={{ flexWrap: 'wrap' }}>
      {nodes &&
        nodes.map((node, i) => (
          <Box
            key={i}
            className="itemContainer"
            sx={{ width: ['100%', '50%', '25%'], p: 1 }}
          >
            <BgImage
              img={node}
              className="item"
              sx={{ minHeight: 385 }}
            ></BgImage>
          </Box>
        ))}
    </Flex>
  )
}
