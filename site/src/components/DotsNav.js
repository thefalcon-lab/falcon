/** @jsx jsx */
import { jsx, Flex, Box } from 'theme-ui'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const DotsNav = (props) => {
  return (
    <nav className="dotNav" sx={{ ...styles }} {...props}>
      <ul>
        <li>
          <AnchorLink href="#top">
            <Flex className="content">
              <span>Top</span>
              <div className="circle"></div>
            </Flex>
          </AnchorLink>
        </li>

        <li>
          <AnchorLink href="#brand">
            <Flex className="content">
              <span>Brand</span>
              <div className="circle"></div>
            </Flex>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#clients">
            <Flex className="content">
              <span>Clients</span>
              <div className="circle"></div>
            </Flex>
          </AnchorLink>
        </li>
      </ul>
    </nav>
  )
}

export default DotsNav

const styles = {
  position: 'fixed',
  top: '50%',
  right: 30,
  zIndex: 10,
  bg: 'rgba(0,0,0,.3)',
  borderRadius: 10,
  px: 10,
  py: 15,
  '.content': {
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  a: {
    '&:hover': {
      '.circle': {
        transform: 'scale(1.6)',
        bg: 'primary',
      },
      span: {
        opacity: 1,
        right: 25,
      },
    },
  },
  '.circle': {
    width: 8,
    height: 8,
    my: 6,

    bg: 'white',
    borderRadius: '50%',
    variant: 'transitions.m',
    '&:hover': {
      transform: 'scale(1.6)',
      bg: 'primary',
    },
  },

  ul: {
    // bg: 'black',
    m: 0,
    li: {
      listStyleType: 'none',
      lineHeight: '25px',
      m: 0,
      position: 'relative',
    },
  },
  span: {
    opacity: 0,

    position: 'absolute',
    right: 0,
    // top: 1,
    color: 'white',
    textTransform: 'uppercase',
    fontFamily: 'bold',
    letterSpacing: 1.5,
    fontSize: 10,

    variant: 'transitions.m',
  },
}
