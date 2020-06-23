/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui'
import { Spacer } from '../ui-components'

export const ProjectHeader = ({ title, subtitle, ...props }) => (
  <Container sx={{ maxWidth: 'l' }} {...props}>
    <h1 className="gsReveal" dangerouslySetInnerHTML={{ __html: title }} />
    <Spacer className="gsReveal" />
    <Box
      className="subtitle gsReveal"
      sx={{
        variant: 'text.subtitle',
        maxWidth: 640,
      }}
      dangerouslySetInnerHTML={{ __html: subtitle }}
    />
  </Container>
)
