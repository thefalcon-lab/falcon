/** @jsx jsx */
import { jsx, Container, Flex, Box } from 'theme-ui'
import React from 'react'
import Parallax from '../../Parallax'
import BrandAnimation from '../../BrandAnimation'

export const FrontPageAnimations = ({ page, ...props }) => {
  return (
    <>
      <Parallax />
      <BrandAnimation />
    </>
  )
}
