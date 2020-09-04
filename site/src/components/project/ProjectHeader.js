/** @jsx jsx */
import { jsx, Box, Container, Flex, Button } from 'theme-ui'
import { Link } from 'gatsby'
import { Spacer } from '../ui-components'

export const ProjectHeader = ({ title, subtitle, ...props }) => (
  <Container sx={{ maxWidth: 'l' }} {...props}>
    <Flex sx={{ justifyContent: 'space-between' }}>
      <h1 className="gsReveal" dangerouslySetInnerHTML={{ __html: title }} />
    </Flex>
    <Spacer
      className="gsReveal"
      sx={{ '.projectSingle &': { mb: [50, 80] } }}
    />
    {subtitle && (
      <Box
        className="subtitle gsReveal"
        sx={{
          variant: 'text.subtitle',
          maxWidth: 640,
          '.projectSingle &': { display: 'none' },
        }}
        dangerouslySetInnerHTML={{ __html: subtitle }}
      />
    )}
  </Container>
)
