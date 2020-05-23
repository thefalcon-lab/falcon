/** @jsx jsx */
import { Container, jsx, Box } from 'theme-ui'
import { Link } from 'gatsby'
import SocialFollow from '../social/SocialFollows'
import ContactInfo from '../ContactInfo'
import Menu from '../header/Menu'
import { FeaturedPosts } from '../widgets'

const Footer = () => {
  return (
    <footer sx={{ ...styles }}>
      <Container className="footerContainer">
        <Box>
          <h3>Contact</h3>
          <ContactInfo />
          <Box className="social" sx={{ fontWeight: 'bold' }}>
            follow us on
            <Box className="socialItems" sx={{ ...socialStyles }}>
              <SocialFollow />
            </Box>
          </Box>
        </Box>
        <Box>
          <h3>News</h3>
          <FeaturedPosts location="footer" />
        </Box>
        <Box>
          <h3>Services</h3>
          <Menu menuName="footer" sx={{ ...footerMenuStyles }} />
        </Box>
      </Container>
    </footer>
  )
}

const styles = {
  bg: 'footerBg',
  pt: 50,
  pb: 70,
  color: 'footerColor',
  fontSize: 18,
  a: {
    color: 'footerColor',
    '&:hover': {
      color: 'accent',
    },
  },
  '.footerContainer': {
    display: ['block', 'flex', 'flex'],
    justifyContent: 'space-around',
  },
  h3: {
    color: 'white',
    textTransform: 'uppercase',
    mb: 35,
  },
}

const socialStyles = {
  mb: [50, 0],
  bg: 'primary',
  mt: 30,
  height: 40,
  position: 'relative',
  ml: [0, '-50vw'],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '.widget': {
    position: ['relative', 'absolute'],
    right: ['initial', '20%'],
  },
  a: {
    '&:hover': {
      svg: {
        color: 'black',
      },
    },
  },
  svg: {
    mr: 12,
    width: 22,
    height: 22,
    variant: 'transitions.m',
  },
}

const footerMenuStyles = {
  ul: {
    m: 0,
  },
  '.menu-item': {
    listStyleType: 'none',
  },
}

export default Footer
