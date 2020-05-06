/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui'
import React from 'react'

export const ProjectSections = ({ items, ...props }) => (
  <>
    {items && (
      <Box sx={{ ...styles }} {...props}>
        {items.map((item, i) => {
          const { title, content, cssclass } = item
          return (
            <Box key={i} className={`projectSection ${cssclass}`}>
              <Container sx={{ maxWidth: 'm' }}>
                <h2
                  className="title"
                  dangerouslySetInnerHTML={{ __html: title }}
                />
                <p
                  className="content"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              </Container>
            </Box>
          )
        })}
      </Box>
    )}
  </>
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
