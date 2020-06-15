/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import Parallax from '../../Parallax'
import BrandAnimation from '../../BrandAnimation'
import BrandMobile from '../../../images/brandMobile.inline.svg'

export const FrontPageAnimations = ({ page, ...props }) => {
  return (
    <Box {...props} sx={{ ...style }}>
      <Parallax />
      <div id="brand">
        <BrandAnimation />
      </div>
      <div className="mobileImage" sx={{ bg: 'black' }}>
        <BrandMobile />
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
