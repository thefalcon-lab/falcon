/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'

export const ProjectTags = ({ items, ...props }) => (
  <>
    {items && (
      <Box className="projectTags" {...props}>
        {items.map((tag, i) => {
          return (
            <Box key={i} className="tagItem">
              {tag.item}
            </Box>
          )
        })}
      </Box>
    )}
  </>
)
