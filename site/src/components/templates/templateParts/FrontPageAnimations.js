/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import Parallax from '../../Parallax'
import Img from 'gatsby-image'
import BrandAnimation from '../../BrandAnimation'

export const FrontPageAnimations = ({ page, ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "mobileImage.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 375) {
            ...GatsbyImageSharpFluid_tracedSVG
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
      <div className="mobileImage">
        <Img fluid={data.fileName.childImageSharp.fluid} />
      </div>
    </Box>
  )
}

const style = {
  '#brand': {
    display: ['none', 'block'],
  },
  '.mobileImage': {
    display: ['block', 'none'],
  },
}
