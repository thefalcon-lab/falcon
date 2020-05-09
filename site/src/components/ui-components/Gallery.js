import Img from 'gatsby-image'
import { chunk, sum } from 'lodash'
import React from 'react'
import { Box } from 'theme-ui'

export const Gallery = ({ items, itemsPerRow }) => {
  // Split images into groups of the given size
  const rows = chunk(items, itemsPerRow)
  return (
    <div>
      {rows.map((row) => {
        const rowAspectRatioSum = sum(
          row.map(
            (item) =>
              item.featuredImage.localFile.childImageSharp.fluid.aspectRatio
          )
        )

        return row.map((item, i) => <Box key={i} />)
      })}
    </div>
  )
}
