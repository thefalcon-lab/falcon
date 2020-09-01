/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui'
import { graphql } from 'gatsby'
import Slider from 'react-slick'
// import testimonialsBlockStyles from '../../styles/acfBlocksStyles/testimonialsBlockStyles'
import sectionsStyles from '../../styles/acfBlocksStyles/sectionsStyles'
import ParsedContent from '../../utils/ParsedContent'
import '../../styles/acfBlocksStyles/slick.css'
import '../../styles/acfBlocksStyles/slick-theme.css'
import { QuoteBottom, QuoteTop } from '../Icons'
import Masonry from 'react-masonry-css'

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
      picture {
        localFile {
          url
        }
      }
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
    autoplaySpeed: 10000,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  const items = testimonials.map((item, i) => {
    const { author, content, picture } = item
    return (
      <Box className="testimonial" key={i}>
        {picture && (
          <img className="socialIcon" src={picture.localFile.url} alt="logo" />
        )}
        <QuoteTop className="quote quoteTop" />
        <Box className="text">{content}</Box>
        <QuoteBottom className="quote quoteBottom" />
        <Box className="author" dangerouslySetInnerHTML={{ __html: author }} />
      </Box>
    )
  })
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
        {testimonials.length > 0 && cssclass === 'brag' ? (
          <Masonry
            breakpointCols={{ default: 4, 1100: 3, 900: 2, 600: 1 }}
            className="masonryGrid"
            columnClassName="masonryCol"
          >
            {items}
          </Masonry>
        ) : (
          <Slider {...settings}>{items}</Slider>
        )}
      </Container>
    </Box>
  )
}

const styles = {
  bg: 'lightGrey',
  pt: 70,
  pb: 50,

  position: 'relative',
  '.container': { maxWidth: 'm' },
  '.testimonial': {
    bg: 'lightGrey',
    pt: [30, 30, 0],
  },
  '.text': {
    fontFamily: 'bold',
    fontSize: [18, 20],
    lineHeight: 1.25,
    mb: 50,
    maxWidth: 600,
    mx: 'auto',
    pt: 20,
  },
  '.author': {
    fontSize: 14,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  '.quote': {
    position: 'absolute',
    '&.quoteTop': {
      top: 0,
      left: 0,
      width: [30, 40, 67],
    },
    '&.quoteBottom': {
      bottom: 30,
      right: 0,
      width: [30, 40, 67],
    },
  },
  '.masonryGrid': {
    display: 'flex',
    mr: 7,
    width: 'auto',
  },
  '.masonryCol': {
    pl: 7,
    backgroundClip: 'padding-box',
    bg: 'white',
  },
  '&.brag': {
    bg: 'white',
    '.container': {
      maxWidth: '100%',
    },
    '.testimonial': {
      position: 'relative',
      mb: 7,
      px: 30,
      pt: 60,
      pb: 20,
      '.text': {
        fontSize: 20,
        mb: 20,
      },
      '.quote': {
        width: 30,
        '&.quoteTop': {
          top: 35,
          left: 15,
        },
        '&.quoteBottom': {
          bottom: 30,
          right: 15,
        },
      },
      '.author': {
        textAlign: 'left',
        strong: {
          display: 'block',
        },
      },
      '.socialIcon': {
        position: 'absolute',
        right: 20,
        top: 20,
      },
    },
  },
}
