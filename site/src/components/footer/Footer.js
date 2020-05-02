/** @jsx jsx */
import { Container, jsx, Flex, Box } from 'theme-ui'
import FooterContent from './FooterContent'
import SocialFollow from '../social/SocialFollows'
import socialStyles from '../../styles/socialStyles'

const Footer = () => (
  <footer sx={{ ...styles }}>
    <Container className="footerContainer">
      <Box>
        <h3>Contact</h3>
      </Box>
      <Box>
        <h3>News</h3>
      </Box>
      <Box>
        <h3>Services</h3>
      </Box>
    </Container>
  </footer>
)

const styles = {
  bg: 'footerBg',
  pt: 75,
  pb: 120,
  color: 'footerColor',
  fontSize: 's',
  a: {
    color: 'footerColor',
    '&:hover': {
      color: 'accent',
    },
  },
  '.footerContainer': {
    display: 'flex',
  },
  h3: {
    color: 'white',
  },
}

export default Footer
