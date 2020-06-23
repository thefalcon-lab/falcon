/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui'
import React from 'react'

export const ProjectTags = ({ items, ...props }) => (
  <>
    {items && (
      <Box className="projectTags gsReveal" sx={{ ...styles }} {...props}>
        <Container className="container" sx={{ maxWidth: 'm' }}>
          {items.map((tag, i) => {
            return (
              <Box key={i} className={`tagItem number-${i + 1}`}>
                {tag.item}
              </Box>
            )
          })}
        </Container>
      </Box>
    )}
  </>
)

const styles = {
  bg: 'black',
  color: 'white',
  textTransform: 'uppercase',
  fontFamily: 'bold',
  fontSize: ['xs'],
  py: 60,
  '.container': {
    display: 'flex',
    flexWrap: 'wrap',
  },
  '.tagItem': {
    width: ['50%', '25%'],
    p: 15,
  },
  '@media (min-width: 600px)': {
    '.number-1,.number-2,.number-3,.number-4,.number-9,.number-10,.number-11,.number-12': {
      bg: ['darkGrey'],
    },
  },
  '@media (max-width: 599px)': {
    '.number-1,.number-2,.number-5,.number-6,.number-9,.number-10,.number-13,.number-14': {
      bg: ['darkGrey'],
    },
  },
}
