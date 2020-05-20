/** @jsx jsx */
import { jsx, Box, Container, Flex } from 'theme-ui'
import { graphql } from 'gatsby'
import Slider from 'react-slick'
// import testimonialsBlockStyles from '../../styles/acfBlocksStyles/testimonialsBlockStyles'
import sectionsStyles from '../../styles/acfBlocksStyles/sectionsStyles'
import ParsedContent from '../../utils/ParsedContent'
import '../../styles/acfBlocksStyles/slick.css'
import '../../styles/acfBlocksStyles/slick-theme.css'
import { QuoteBottom, QuoteTop } from '../Icons'

export const fragment = graphql`
  fragment testimonialsBlockFragment on WpPage_Flexlayouts_FlexibleLayouts_TestimonialsBlock {
    cssclass
    anchor
    marginTop
    marginBottom
    title
    content
    testimonials {
      author
      content
    }
  }
`

export const TestimonialsBlock = ({
  marginTop,
  marginBottom,
  cssclass,
  anchor,
  title,
  content,
  testimonials,
  ...props
}) => {
  const margins = {
    mt: marginTop,
    mb: marginBottom,
  }

  const settings = {
    infinite: true,
    autoplay: true,
    fade: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }
  return (
    <Box
      as="section"
      className={`${cssclass || ''} testimonialsBlock`}
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
        // sx={{ display: 'flex', justifyContent: 'center' }}
      >
        {title && <h2 dangerouslySetInnerHTML={{ __html: title }} />}
        {content && (
          <Box className="intro">
            <ParsedContent content={content} />
          </Box>
        )}
        {testimonials.length > 0 && (
          <Slider {...settings}>
            {testimonials.map((item, i) => {
              const { author, content } = item
              return (
                <Box className="testimonial" key={i}>
                  <QuoteTop className="quote quoteTop" />
                  <Box className="text">{content}</Box>
                  <QuoteBottom className="quote quoteBottom" />
                  <Box
                    className="author"
                    dangerouslySetInnerHTML={{ __html: author }}
                  />
                </Box>
              )
            })}
          </Slider>
        )}
      </Container>
    </Box>
  )
}

const styles = {
  bg: 'lightGrey',
  pt: 70,
  pb: 50,
  textAlign: 'center',
  textTransform: 'uppercase',
  position: 'relative',
  '.container': { maxWidth: 'm' },
  '.testimonial': {
    bg: 'lightGrey',
  },
  '.text': {
    fontFamily: 'heading',
    fontSize: 25,
    lineHeight: 1.25,
    mb: 50,
    maxWidth: 600,
    mx: 'auto',
    pt: 20,
  },
  '.author': {
    fontSize: 14,
  },
  '.quote': {
    position: 'absolute',
    '&.quoteTop': {
      top: 0,
      left: 0,
    },
    '&.quoteBottom': {
      bottom: 30,
      right: 0,
    },
  },
}
