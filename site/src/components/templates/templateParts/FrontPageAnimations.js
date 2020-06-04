/** @jsx jsx */
import { jsx, Container, Flex, Box } from 'theme-ui'
import React from 'react'
// import BrandAnimation from '../../BrandAnimation'
import Parallax from '../../Parallax'

import brandAnimation from '../../../../static/brandAnimation.html'

export const FrontPageAnimations = ({ page, ...props }) => {
  return (
    <Box {...props}>
      {/* <div id="brand">
        <ParsedContent content={brandAnimation} />
      </div> */}

      <Parallax />
    </Box>
  )
}
