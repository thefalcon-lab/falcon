/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui'
import { graphql } from 'gatsby'
import Button from './Button'
import ParsedContent from '../../utils/ParsedContent'

export const fragment = graphql`
  fragment contentBlockFragment on WpPage_Flexlayouts_FlexibleLayouts_ContentBlock {
    title
    content
    cssclass
    anchor
    marginTop
    marginBottom
    button {
      target
      title
      url
    }
  }
`

export const ContentBlock = ({
  title,
  button,
  content,
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
      id={anchor}
      className={`${cssclass || ''} contentBlock`}
      sx={{
        ...margins,
        ...styles,
      }}
      {...props}
    >
      <Container className="container">
        {title && <h2 dangerouslySetInnerHTML={{ __html: title }} />}
        {content && (
          <Box className="content">
            <ParsedContent content={content} />
          </Box>
        )}
        {button && <Button button={button} />}
      </Container>
    </Box>
  )
}
const styles = {
  '&.aboutSubtitle,&.aboutContent': {
    '.container': {
      maxWidth: 'm',
    },
  },
  '&.aboutSubtitle': {
    mt: [50, 100],
    variant: 'text.subtitle',
  },
  '&.aboutContent': {
    mb: [50, 100],
    mt: 20,
  },
}
