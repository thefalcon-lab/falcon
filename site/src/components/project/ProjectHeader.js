/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui'
import { Spacer } from '../ui-components'

export const ProjectHeader = ({ title, subtitle, ...props }) => (
  <Container sx={{ maxWidth: 'l' }} {...props}>
    <h1 dangerouslySetInnerHTML={{ __html: title }} />
    <Spacer />
    <Box
      className="subtitle"
      sx={{
        variant: 'text.subtitle',
        maxWidth: 640,
      }}
      dangerouslySetInnerHTML={{ __html: subtitle }}
    />
  </Container>
)
