/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui'
import { graphql } from 'gatsby'
import GatsbyImg from '../images/Image'

import sectionsStyles from '../../styles/acfBlocksStyles/sectionsStyles'
const { detect } = require('detect-browser')
const browser = detect()

export const fragment = graphql`
  fragment imageBlockFragment on WpPage_Flexlayouts_FlexibleLayouts_ImageBlock {
    image {
      ...ImageBlockFragment
    }
    cssclass
    anchor
    marginTop
    marginBottom
  }
`

export const ImageBlock = ({
  image,
  marginTop,
  marginBottom,
  cssclass,
  anchor,
  ...props
}) => {
  const margins = {
    mt: marginTop,
    mb: marginBottom,
  }

  const styles = {
    '&.aboutImage': {
      mb: browser.name !== 'safari' ? [50, 100] : [-100, 0],
      mt: browser.name === 'safari' && [-170, -100],
      '.container': {
        maxWidth: 'm',
      },
    },
    '&.servicesImage': {
      bg: 'black',
      py: 50,
    },
  }

  return (
    <Box
      as="section"
      className={`${cssclass || ''} imageBlock`}
      id={anchor}
      {...props}
      sx={{
        ...margins,
        ...sectionsStyles,
        ...styles,
      }}
    >
      <Container
        className="container"
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        {image.localFile.childImageSharp ? (
          <GatsbyImg img={image} />
        ) : (
          <img src={image.localFile.publicURL} />
        )}
      </Container>
    </Box>
  )
}
