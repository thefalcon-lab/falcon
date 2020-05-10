/** @jsx jsx */
import { jsx, Box, Flex } from 'theme-ui'
import { graphql } from 'gatsby'
import ParsedContent from '../../utils/ParsedContent'
import BgImage from '../images/BgImage'

export const fragment = graphql`
  fragment teamBlockFragment on WpPage_Flexlayouts_FlexibleLayouts_TeamBlock {
    title
    content
    cssclass
    anchor
    team {
      image {
        ...ImageTeamFragment
      }
      name
      role
    }
  }
`

export const TeamBlock = ({
  title,
  button,
  content,
  cssclass,
  anchor,
  team,
  ...props
}) => {
  return (
    <Box
      as="section"
      id={anchor}
      className={`${cssclass || ''} teamBlock`}
      sx={{
        ...styles,
      }}
      {...props}
    >
      {title && <h2 dangerouslySetInnerHTML={{ __html: title }} />}
      {content && (
        <Box className="content">
          <ParsedContent content={content} />
        </Box>
      )}
      {team.length > 0 && (
        <Box className="team">
          {team.map((item, i) => {
            const { image, name, role } = item
            return (
              <Box key={i} className="teamMember">
                <BgImage className="bgImage" img={image}>
                  <Box className="overlay">
                    <Box className="content">
                      <h3>{name}</h3>
                      <h4>{role}</h4>
                    </Box>
                  </Box>
                </BgImage>
              </Box>
            )
          })}
        </Box>
      )}
    </Box>
  )
}
const styles = {
  '.team': {
    display: 'flex',
    flexWrap: 'wrap',
  },
  '.teamMember': {
    px: 2,
    py: 1,
    cursor: 'pointer',
    width: ['100%', '50%', '33%', '25%'],
    'h3,h4': {
      m: 0,
    },
    '&:hover': {
      '.overlay': {
        opacity: 1,
        transform: 'translateX(0)',
      },
    },
  },
  '.bgImage': {
    height: 500,
    position: 'relative',
    overflow: 'hidden',
  },
  '.overlay': {
    opacity: 0,
    variant: 'transitions.m',
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    width: '100%',
    bg: 'rgba(214, 63, 24, .75)',
    display: 'flex',
    alignItems: 'flex-end',
    p: 25,
    transform: 'translateX(-500px)',
  },
  '.content': {
    h3: {
      color: 'white',
      fontSize: 30,
      mb: 10,
    },
  },
}
