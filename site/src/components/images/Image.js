/** @jsx jsx */
import { jsx } from 'theme-ui'
import Img from 'gatsby-image'

const Image = ({ img, ...props }) =>
  img && (
    <Img
      fluid={img.localFile.childImageSharp.fluid}
      alt={img.altText}
      {...props}
    />
  )

export default Image
