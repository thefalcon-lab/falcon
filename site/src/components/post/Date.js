import React from 'react'
import { Box } from 'theme-ui'
import moment from 'moment/moment'

const Date = ({ date, ...props }) => (
  <Box className="date gsReveal" {...props}>
    {moment(date).format(`MMMM D, YYYY`)}
  </Box>
)

export default Date
