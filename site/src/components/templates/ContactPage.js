/** @jsx jsx */
import { jsx, Container, Flex, Box } from 'theme-ui'
import { ProjectHeader } from '../project'
import ContactInfo from '../ContactInfo'
import ParsedContent from '../../utils/ParsedContent'

const ContactPage = ({ page, ...props }) => {
  return (
    <Container
      sx={{ maxWidth: 'l', position: 'relative' }}
      sx={{ ...styles }}
      {...props}
    >
      <ProjectHeader
        title="contact"
        subtitle="We would love to work with yOU!"
        sx={{ mb: 100 }}
      />
      <Box
        sx={{
          maxWidth: 900,
          mx: 'auto',
          display: ['block', 'block', 'flex'],
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ width: ['100%', '100%', '33%'] }}>
          <ContactInfo sx={{ color: 'text', a: { color: 'text' } }} />
        </Box>
        <Box className="formContainer" sx={{ width: ['100%', '100%', '60%'] }}>
          <ParsedContent content={page.content} />
        </Box>
      </Box>
    </Container>
  )
}

export default ContactPage

const styles = {
  '.formContainer': {
    maxWidth: 700,
  },
  '.contact-form': {
    '.row': {
      display: ['block', 'flex'],
      flexWrap: 'wrap',
      div: {
        width: ['100%', '50%'],
        pr: [0, 5],
        pb: 5,
        '&:nth-child(even)': {
          pr: 0,
        },
        'input, textarea': { width: '100%' },
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
    textarea: {
      height: 150,
      width: '100%',
    },
    '#inputFile': {
      width: '0.1px',
      height: '0.1px',
      opacity: '0',
      overflow: 'hidden',
      position: 'absolute',
      zIndex: '-1',
    },
    'label[for="inputFile"]': {
      variant: 'buttons.primary',
    },
    '.buttons': {
      display: ['block', 'flex'],
      justifyContent: 'space-between',
    },
  },
}
