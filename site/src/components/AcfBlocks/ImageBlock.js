/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui'
import { graphql } from 'gatsby'
import GatsbyImg from '../images/Image'
import imageBlockStyles from '../../styles/acfBlocksStyles/imageBlockStyles'
import sectionsStyles from '../../styles/acfBlocksStyles/sectionsStyles'

export const fragment = graphql`
  fragment imageBlockFragment on WpPage_Flexlayouts_FlexibleLayouts_ImageBlock {
    image {
      ...ImageFluidFragment
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

const styles = {
  '&.aboutImage': {
    mb: [50, 100],
    '.container': {
      maxWidth: 'm',
    },
  },
}
