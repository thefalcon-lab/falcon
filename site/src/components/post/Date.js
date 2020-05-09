import React from 'react'
import { Box } from 'theme-ui'
import moment from 'moment/moment'

const Date = ({ date }) => (
  <Box className="date">{moment(date).format(`MMMM D, YYYY`)}</Box>
)

export default Date
