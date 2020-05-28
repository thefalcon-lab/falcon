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
          <FeaturedPosts
            location="footer"
            sx={{ a: { display: 'inline-block', mb: 10.8 } }}
          />
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
  fontSize: 16,
  a: {
    color: 'footerColor',
    '&:hover': {
      color: 'accent',
    },
  },
  '.footerContainer': {
    display: ['block', 'flex', 'flex'],
    justifyContent: 'space-between',
    maxWidth: 'l',
  },
  h3: {
    color: 'white',
    textTransform: 'uppercase',
    mb: 25,
    fontSize: 18,
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
    right: ['initial', '3%'],
    top: [3, 8],
  },
  a: {
    '&:hover': {
      svg: {
        color: 'black',
      },
    },
  },
  svg: {
    mr: 20,
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
