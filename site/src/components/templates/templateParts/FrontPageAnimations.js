/** @jsx jsx */
import { jsx, Container, Flex, Box } from 'theme-ui'
import React from 'react'
// import BrandAnimation from '../../BrandAnimation'
import { useStaticQuery, graphql } from 'gatsby'
import Parallax from '../../Parallax'
import ParsedContent from '../../../utils/ParsedContent'
import Img from 'gatsby-image'
import brandAnimation from '../../../../static/brandAnimation.html'

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
        <ParsedContent content={brandAnimation} />
      </div>
      <div className="mobileImage">
        <Img fluid={data.fileName.childImageSharp.fluid} />
      </div>
    </Box>
  )
}

const style = {
  '.brand': {
    display: ['none', 'block'],
  },
  '.mobileImage': {
    display: ['block', 'none'],
  },
}
