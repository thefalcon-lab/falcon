/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { graphql, useStaticQuery } from 'gatsby'

const DotsNav = (props) => {
  const data = useStaticQuery(graphql`
    query {
      allWpMenu(filter: { name: { eq: "dotNav" } }) {
        nodes {
          menuItems {
            nodes {
              url
              label
            }
          }
        }
      }
    }
  `)

  const menuItems = data.allWpMenu.nodes[0].menuItems.nodes
  console.log('menuItems', menuItems)
  return (
    <nav className="dotNav" sx={{ ...styles }} {...props}>
      <ul>
        {menuItems &&
          menuItems.map((item, i) => (
            <li key={i}>
              <AnchorLink href={item.url}>
                <Flex className="content">
                  <span>{item.label}</span>
                  <div className="circle"></div>
                </Flex>
              </AnchorLink>
            </li>
          ))}
      </ul>
    </nav>
  )
}

export default DotsNav

const styles = {
  position: 'fixed',
  top: '40%',
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
