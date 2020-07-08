/** @jsx jsx */
import { jsx, Box, Container, Flex } from 'theme-ui'
import { Fragment } from 'react'
import Img from 'gatsby-image'

export const ProjectSections = ({ items, ...props }) => (
  <Fragment>
    {items && (
      <Box sx={{ ...styles }} {...props}>
        {items.map((item, i) => {
          const { title, content, cssclass, images } = item
          return (
            <Box key={i} className={`projectSection ${cssclass}`}>
              <Container sx={{ maxWidth: 'm' }}>
                <h2
                  className="title gsReveal"
                  dangerouslySetInnerHTML={{ __html: title }}
                />
                <p
                  className="content gsReveal"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              </Container>
              <Container>
                <Flex
                  className="gallery"
                  sx={{
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    mt: 50,
                    px: [20, 20, 0],
                  }}
                  className="gsReveal"
                >
                  {images?.length > 0 &&
                    images.map((img, i) => {
                      const widthStyle =
                        images.length === 1
                          ? [350, 600, 900, 750]
                          : [350, 600, 900, 420]
                      return (
                        <div
                          className="galleryItem"
                          key={i}
                          // sx={{ maxWidth: [600, 900, 420] }}
                        >
                          <Img
                            fluid={img?.localFile?.childImageSharp?.fluid}
                            sx={{ width: widthStyle }}
                          />
                        </div>
                      )
                    })}
                </Flex>
              </Container>
            </Box>
          )
        })}
      </Box>
    )}
  </Fragment>
)

const styles = {
  '.projectSection': {
    py: 60,
    m: 0,
    '.title': {
      mb: 40,
    },
    '&:nth-child(even)': {
      bg: 'lightGrey',
    },
    '&:first-of-type': {
      bg: 'black',
      '.title,.content': {
        color: 'white',
      },
    },
  },
}
