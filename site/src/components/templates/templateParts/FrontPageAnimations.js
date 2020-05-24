/** @jsx jsx */
import { jsx, Container, Flex, Box } from 'theme-ui'
import React from 'react'
// import Parallax from '../../Parallax'
import BrandAnimation from '../../BrandAnimation'
import Loadable from 'react-loadable'
import loadable from '@loadable/component'
const loader = () => <div>Loading.....</div>

// const MyParallaxComponent = Loadable({
//   loader: () => import('../../Parallax'),
//   loading: loader,
// })

const LoadedParallax = loadable(() => import('../../Parallax'))
LoadedParallax.preload()
export const FrontPageAnimations = ({ page, ...props }) => {
  return (
    <Box {...props}>
      <LoadedParallax />
      <BrandAnimation />
    </Box>
  )
}
