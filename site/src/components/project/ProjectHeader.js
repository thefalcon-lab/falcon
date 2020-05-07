/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui'
import { Spacer } from '../ui-components'

export const ProjectHeader = ({ title, subtitle, ...props }) => (
  <Container sx={{ maxWidth: 'l' }} {...props}>
    <h1>{title}</h1>
    <Spacer />
    <Box
      className="subtitle"
      sx={{
        textTransform: 'uppercase',
        fontFamily: 'bold',
        maxWidth: 640,
        lineHeight: 1.77,
      }}
    >
      {subtitle}
    </Box>
  </Container>
)
