/** @jsx jsx */
import { jsx, Box, Container, Flex, Button } from 'theme-ui'
import { Link } from 'gatsby'
import { Spacer } from '../ui-components'
import { HubspotLogo } from '../Icons'

export const ProjectHeader = ({ title, subtitle, ...props }) => {
  return (
    <Container sx={{ maxWidth: 'l' }} {...props}>
      <h1 className="gsReveal" dangerouslySetInnerHTML={{ __html: title }} />
      <Spacer
        className="gsReveal"
        sx={{ '.projectSingle &': { mb: [50, 80] } }}
      />
      {subtitle && (
        <Flex sx={{ justifyContent: 'space-between' }} className="gsReveal">
          <Box
            className="subtitle"
            sx={{
              variant: 'text.subtitle',
              maxWidth: 640,
              '.projectSingle &': { display: 'none' },
            }}
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
          {title.toLowerCase() === 'marketing' && (
            <HubspotLogo sx={{ ml: 30 }} />
          )}
        </Flex>
      )}
    </Container>
  )
}
