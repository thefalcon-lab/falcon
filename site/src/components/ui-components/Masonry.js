/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React, { useEffect, useRef, useState } from 'react'

import { useEventListener } from '../../hooks'

const fillCols = (children, cols) => {
  children.forEach((child, i) => cols[i % cols.length].push(child))
}

export const Masonry = ({ children, gap, minWidth = 500, ...rest }) => {
  const ref = useRef()
  const [numCols, setNumCols] = useState(3)
  const cols = [...Array(numCols)].map(() => [])
  fillCols(children, cols)

  const resizeHandler = () =>
    setNumCols(Math.ceil(ref.current.offsetWidth / minWidth))
  useEffect(resizeHandler, [])
  useEventListener(`resize`, resizeHandler)

  return (
    <Box sx={{ ...style }} ref={ref} {...rest}>
      {[...Array(numCols)].map((_, index) => (
        <Box className="col" key={index}>
          {cols[index]}
        </Box>
      ))}
    </Box>
  )
}

const style = {
  display: 'grid',
  gridAutoFlow: 'column',
  gridGap: 1,
  '.col': {
    display: 'grid',
    gridGap: 1,
  },
}
