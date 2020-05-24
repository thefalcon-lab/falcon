/** @jsx jsx */
import { jsx, Container, Flex, Box } from 'theme-ui'
import React from 'react'
import BrandAnimation from '../../BrandAnimation'
import Loader from 'react-spinners/BeatLoader'

import loadable from '@loadable/component'

const LoadedParallax = loadable(() => import('../../Parallax'))
LoadedParallax.preload()

export const FrontPageAnimations = ({ page, ...props }) => {
  return (
    <Box {...props}>
      <LoadedParallax
        fallback={
          <Flex
            sx={{
              bg: 'black',
              height: '100vh',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Loader color="primary" />
          </Flex>
        }
      />
      <BrandAnimation />
    </Box>
  )
}
