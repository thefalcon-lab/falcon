/** @jsx jsx */
import { Container, jsx, Flex, Box } from 'theme-ui'
import { useStaticQuery, graphql, Link } from 'gatsby'
import SocialFollow from '../social/SocialFollows'

import { LocationIcon, PhoneIcon, MailIcon } from '../Icons'

const CONTACT_QUERY = graphql`
  query {
    wp {
      themeOptions {
        info {
          address
          mail
          phone
        }
      }
    }
  }
`

const Footer = () => {
  const data = useStaticQuery(CONTACT_QUERY)
  const { address, mail, phone } = data.wp.themeOptions.info
  return (
    <footer sx={{ ...styles }}>
      <Container className="footerContainer">
        <Box>
          <h3>Contact</h3>
          <Flex className="contactItem">
            <PhoneIcon />
            <a href={`tel:${phone}`}>{phone}</a>
          </Flex>
          <Flex className="contactItem">
            <MailIcon sx={{ mt: 3 }} />
            <a href={`mailto:${mail}`}>{mail}</a>
          </Flex>
          <Flex className="contactItem">
            <LocationIcon />
            <Box dangerouslySetInnerHTML={{ __html: address }} />
          </Flex>
          <Box className="social" sx={{ fontWeight: 'bold' }}>
            follow us on
            <Box className="socialItems" sx={{ ...socialStyles }}>
              <SocialFollow />
            </Box>
          </Box>
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
}

const styles = {
  bg: 'footerBg',
  pt: 75,
  pb: 120,
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
    fontSize: 36,
    mb: 50,
  },
  '.contactItem': {
    mb: 50,
    svg: {
      mr: 15,
    },
    lineHeight: 1.2,
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

export default Footer
