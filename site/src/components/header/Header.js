/** @jsx jsx */
import { jsx, Container, Box, Flex } from 'theme-ui'
import { Fragment } from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import SlideSidebar from './SlideSidebar'
import SiteBranding from './SiteBranding'
import Menu from './Menu'
import useThemeOptions from 'gatsby-theme-blog-data/src/hooks/useThemeOptions'
import { FormDown } from 'grommet-icons'

import Headroom from 'react-headroom'

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      wp {
        generalSettings {
          title
          url
        }
      }
    }
  `)

  const { title } = data.wp.generalSettings
  const { menuName } = useThemeOptions()

  return (
    <Fragment>
      <Headroom>
        <header className="header" sx={{ ...styles }}>
          <Container className="container">
            <SiteBranding title={title} />
            <Menu menuName={menuName} sx={{ ...menuStyles }} />
            <SlideSidebar
              sx={{ display: ['block', 'block', 'block', 'none'] }}
            />
          </Container>
        </header>
      </Headroom>
    </Fragment>
  )
}

const styles = {
  bg: 'headerBg',
  color: 'headerColor',
  margin: 'none',

  '.container': {
    display: ['flex'],
    justifyContent: 'space-between',
    alignItems: 'center',
    // flexWrap: 'wrap',
    alignItems: 'center',
    fontSize: 'm',
    margin: '0 auto',
    maxWidth: 'container',
    py: 'xs',
    width: '90vw',
  },

  '.headroom--pinned &': {
    '>div': {
      py: 'xxs',
    },
  },
}

const menuStyles = {
  display: ['none', 'none', 'none', 'block'],
  '>ul': {
    display: 'flex',
    m: 0,
  },

  '.menu-item': {
    listStyleType: 'none',
    position: 'relative',
    mx: 17,
    fontSize: 12,
    a: {
      color: 'black',
      textTransform: 'uppercase',
      fontWeight: 'normal',
      letterSpacing: 1.6,
      '&:hover': {
        color: 'primary',
      },
    },
    '&.login': {
      bg: 'primary',
      variant: 'transitions.m',
      '&:hover': {
        transform: 'translateY(-3px)',
      },
      a: {
        color: 'white',
        fontWeight: 'bold',
      },

      borderRadius: 84,
      px: 15,
      pt: 1,
    },
    //submenu
    '>.sub-menu': {
      opacity: 0,
      visibility: 'hidden',
      transform: 'translateY(-5px)',
      m: 0,
      position: 'absolute',
      top: 32,
      left: 0,
      bg: 'black',
      a: { color: 'white', '&:hover': { color: 'primary' } },
      width: 'auto',
      whiteSpace: 'nowrap',
      variant: 'transitions.m',
      zIndex: 10,
      py: 10,
      fontFamily: 'bold',
    },
  },
  '.has-subMenu': {
    '&:hover': {
      '>.sub-menu': {
        opacity: 1,
        visibility: 'visible',
        transform: 'translateY(0)',
      },
    },
  },
}

export default Header
