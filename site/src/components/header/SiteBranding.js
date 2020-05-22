/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { Link } from 'gatsby'
import logo from '../../images/logo.svg'

const SiteBranding = ({ title, ...props }) => {
  return (
    <Link as="Link" to="/" rel="home">
      <Flex sx={{ ...styles }} {...props}>
        <img src={logo} alt="falcon lab logo" />
        <h1>{title}</h1>
      </Flex>
    </Link>
  )
}

const styles = {
  alignItems: 'center',
  img: {
    maxWidth: [50, 73],
    mb: 0,
    mr: [10, 22],
  },
  h1: {
    fontSize: ['m', 'l'],
    textTransform: 'uppercase',
    fontFamily: 'heading',
    fontWeight: 500,
    letterSpacing: [4, 9],
    lineHeight: 1.5,
    color: 'headerColor',
    variant: 'transitions.m',
    '.home-page &,.contact-page &,.services-page &': {
      color: 'white',
    },
    '&:hover': {
      color: 'primary',
    },
    m: 0,
  },
}
export default SiteBranding
