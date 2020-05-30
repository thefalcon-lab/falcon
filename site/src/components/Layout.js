/** @jsx jsx */
import { jsx, Box, useThemeUI } from 'theme-ui'
import { Fragment } from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import DotsNav from './DotsNav'
import { Global } from '@emotion/core'
import { globalStyles } from '../styles/GlobalStyles'
import { Grommet } from 'grommet'
import grommetTheme from '../styles/grommet'

import '../styles/scss/styles.scss'

const Layout = ({ children, page, type = 'page' }) => {
  const layoutClass = page !== undefined ? (page.slug ? page.slug : page) : ''

  const { theme } = useThemeUI()

  const pageTemplate = page && page.template ? page.template.templateName : ''

  const fullWidthClass =
    pageTemplate.toLowerCase() === 'full width' ? 'fullWidth' : ''

  return (
    <Grommet theme={grommetTheme}>
      <Global styles={globalStyles(theme)} />
      <Box
        sx={{
          position: 'relative',
          '&.fullWidth': {
            '.mainContainer': {
              maxWidth: `100%`,
              px: 0,
            },
          },
        }}
        className={`${layoutClass}-${type} ${fullWidthClass}`}
      >
        {page && page.isFrontPage && <DotsNav />}
        <Header />
        {page && page.slug && page.slug.includes('contact') && (
          <div
            sx={{
              width: '100%',
              height: 600,
              bg: 'black',
              position: 'relative',
              top: -80,
              left: 0,
              mb: -80,
            }}
          >
            <iframe
              src="https://snazzymaps.com/embed/240089"
              width="100%"
              height="600px"
              sx={{
                border: 'none',
              }}
            ></iframe>
          </div>
        )}

        <main
          sx={{
            pt: `xxl`,
            '.fullWidth &': {
              py: 0,
              mt: -32,
            },
          }}
        >
          <Fragment>{children}</Fragment>
        </main>
        <Footer />
      </Box>
    </Grommet>
  )
}

export default Layout
