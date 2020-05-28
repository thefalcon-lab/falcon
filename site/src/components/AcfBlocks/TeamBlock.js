/** @jsx jsx */
import { jsx, Box, Flex } from 'theme-ui'
import { graphql } from 'gatsby'
import ParsedContent from '../../utils/ParsedContent'
import BgImage from '../images/BgImage'
import overlayStyles from '../../styles/overlayStyles'
import { LinkedinOption } from 'grommet-icons'

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
      linkedin
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
            const { image, name, role, linkedin } = item
            return (
              <Box key={i} className="teamMember">
                <BgImage className="bgImage" img={image}>
                  <Box className="overlay" sx={{ ...overlayStyles }}>
                    <Box className="content">
                      <h3>{name}</h3>
                      <h4>{role}</h4>

                      {linkedin && (
                        <a
                          href={linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <LinkedinOption color="white" sx={{ mt: 10 }} />
                        </a>
                      )}
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
}
