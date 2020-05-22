/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import { useState } from 'react'
import { Menu as MenuIcon, Close } from 'grommet-icons'
import { Layer, Button } from 'grommet'
import Menu from './Menu.js'
import useThemeOptions from 'gatsby-theme-blog-data/src/hooks/useThemeOptions'
import Widgets from '../widgets/Widgets'

const SlideSidebar = ({ ...props }) => {
  const [isMenuOpen, setOpenMenu] = useState(false)
  const [openClass, setOpenClass] = useState(false)
  const { slideMenuWidgets, menuName } = useThemeOptions()

  const openMenu = () => {
    setOpenClass(true)
    setOpenMenu(true)
  }
  const closeMenu = () => {
    setOpenClass(false)
    setTimeout(() => setOpenMenu(false), 200)
  }

  return (
    <Box {...props}>
      <Button
        icon={<MenuIcon />}
        a11yTitle="Open navigation menu"
        onClick={openMenu}
        className={openClass ? 'btn-menu-opened' : 'btn-menu-closing'}
        sx={{
          variant: `buttons.hamburger`,
        }}
      />
      {isMenuOpen && (
        <Layer
          position="right"
          full="vertical"
          modal
          responsive={false}
          onClickOutside={closeMenu}
          onEsc={closeMenu}
          sx={{ ...styles }}
        >
          <Button
            icon={<Close />}
            a11yTitle="Close navigation menu"
            sx={{
              pointer: `cursor`,
              svg: {
                stroke: `headerColor`,
                width: `15px`,
                height: `15px`,
              },
            }}
            className="close"
            onClick={closeMenu}
          />

          <Menu orientation="vertical" menuName={menuName} />

          {slideMenuWidgets &&
            slideMenuWidgets.length > 0 &&
            slideMenuWidgets.map((widget, i) => (
              <Box className="inverse" sx={{ mb: `l` }} key={i}>
                <Widgets widget={widget} location="SlideMenu" />
              </Box>
            ))}
        </Layer>
      )}
    </Box>
  )
}

export default SlideSidebar

const styles = {
  fontFamily: 'body',
  borderRadius: 0,
  bg: 'slideSidebarBg',
  width: ['100%', '468px'],
  display: 'flex',
  overflowY: 'scroll',
  boxShadow: ['none', '-10px 0 40px rgba(0,0,0,0.3)'],
  animationDuration: '.6s',

  p: 'xl',
  '&.menu-closing': {
    // animation: `${pehaafadein} 1 .6s 0s cubic-bezier(0.165, 0.84, 0.44, 1)`,
    boxShadow: ['none', '-10px 0 0 rgba(0,0,0,0)'],
  },
  '.close': {
    cursor: 'pointer',
    position: 'fixed',
    top: 3,
    right: 3,
    svg: { stroke: 'primary' },
  },
  '.menu': {
    a: {
      textDecoration: 'none',
      color: 'white',
      fontFamily: 'heading',
      textTransform: 'uppercase',
      '&:hover': {
        color: 'red',
      },
    },
    mb: 'xxl',
    li: {
      mb: 0,
    },
    ul: {
      m: 0,
      p: 0,

      listStyle: 'none',
      '.menu-item': {
        display: 'block',
        py: 'xs',
        borderBottom: '1px solid rgba(255,255,255,.15)',
        color: 'light',
        a: {
          color: 'light',
        },
        '&:last-of-type': {
          border: 'none',
        },
      },
      'ul a': {
        pl: 'm',
      },
      'ul ul a': {
        pl: 'xl',
      },
    },
    'nav > ul': { mt: 'xl' },
    '[aria-current]': {
      fontStyle: 'italic',
      fontWeight: 'body',
    },
    button: {
      top: -4,
    },
  },
}
