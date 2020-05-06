/** @jsx jsx */
import { jsx, Box } from 'theme-ui'

export const Spacer = (props) => (
  <Box sx={{ width: 125, height: 4, bg: 'primary', my: 30 }} {...props}></Box>
)
