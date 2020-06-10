/** @jsx jsx */
import { jsx } from 'theme-ui'

import BackgroundImage from 'gatsby-background-image'

const BgImage = ({ img, children, ...props }) =>
  img && (
    <BackgroundImage
      fluid={
        img &&
        img.localFile.childImageSharp &&
        img.localFile.childImageSharp.fluid
      }
      alt={img.altText}
      tag="div"
      // backgroundColor="black"
      sx={{
        width: `100%`,
        backgroundRepeat: `no-repeat`,
      }}
      {...props}
    >
      {children}
    </BackgroundImage>
  )

export default BgImage
