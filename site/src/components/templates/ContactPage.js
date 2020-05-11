/** @jsx jsx */
import { jsx, Container, Flex, Box } from 'theme-ui'
import { ProjectHeader } from '../project'
import ContactInfo from '../ContactInfo'
import ParsedContent from '../../utils/ParsedContent'

const ContactPage = ({ page, ...props }) => {
  return (
    <Container sx={{ maxWidth: 'l' }} sx={{ ...styles }} {...props}>
      <ProjectHeader
        title="contact"
        subtitle="We would love to work with yOU!"
        sx={{ mb: 100 }}
      />
      <Flex sx={{ flexWrap: 'wrap', justifyContent: 'space-around' }}>
        <Box>
          <ContactInfo sx={{ color: 'text', a: { color: 'text' } }} />
        </Box>
        <Box sx={{ maxWidth: 600 }}>
          <ParsedContent content={page.content} />
        </Box>
      </Flex>
    </Container>
  )
}

export default ContactPage

const styles = {
  '.contact-form': {
    '.row': {
      display: 'flex',
      flexWrap: 'wrap',
      div: {
        width: '50%',
        pr: 5,
        pb: 5,
        '&:nth-child(even)': {
          pr: 0,
        },
        input: { width: '100%' },
      },
    },
    'input[type="text"],input[type="email"], textarea': {
      border: 'none',
      bg: 'lightGrey',
      p: 10,
    },
    button: {
      variant: 'buttons.primary',
    },
    'input[type="file"]': {
      border: 'none',
      bg: 'primary',
    },
  },
}
