/** @jsx jsx */
import { jsx, Box, Flex } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import Parallax from '../../Parallax'
import BrandAnimation from '../../BrandAnimation'
import Img from 'gatsby-image'

export const FrontPageAnimations = ({ page, ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "brandMobile2.png" }) {
        childImageSharp {
          fixed(width: 375) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `)
  return (
    <Box {...props} sx={{ ...style }}>
      <Parallax />
      <div id="brand">
        <BrandAnimation />
      </div>
      <Flex
        className="mobileImage"
        sx={{ bg: 'black', justifyContent: 'center' }}
      >
        <Img fixed={data.file.childImageSharp.fixed} />
      </Flex>
    </Box>
  )
}

const style = {
  '#brand': {
    display: ['none', 'block'],
  },
  '.mobileImage': {
    display: ['flex', 'none'],
  },
}
