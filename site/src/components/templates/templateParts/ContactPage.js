/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui'
import { useEffect } from 'react'
import { ProjectHeader } from '../../project'
import ContactInfo from '../../ContactInfo'
import ParsedContent from '../../../utils/ParsedContent'
import { document } from 'browser-monads'

export const ContactPage = ({ page, ...props }) => {
  useEffect(() => {
    document.getElementById('inputFile').addEventListener('change', (e) => {
      document.querySelector('label').textContent = e.target.value
        .split('\\')
        .pop()
    })
  }, [])

  return (
    <div>
      <Container
        sx={{ maxWidth: 'l', position: 'relative' }}
        sx={{ ...styles }}
        {...props}
      >
        <ProjectHeader
          title="contact"
          subtitle="We would love to work with yOU!"
          sx={{ mb: 100, h1: { fontSize: [50, 80] } }}
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
          <Box
            className="formContainer gsReveal"
            sx={{ width: ['100%', '100%', '60%'] }}
          >
            <ParsedContent content={page.content} />
          </Box>
        </Box>
      </Container>
    </div>
  )
}

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
      py: 15,
      top: 7,
      position: 'relative',
    },
    '.buttons': {
      display: 'flex',
      justifyContent: 'space-between',
      mt: 20,
      mb: 100,
      flexDirection: 'row-reverse',
    },
  },
}
