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
        <Box className="content gsReveal">
          <ParsedContent content={content} />
        </Box>
      )}
      {team.length > 0 && (
        <Box className="team gsReveal">
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
          {team.length % 4 !== 0 && (
            <div className="apply">
              <Flex className="content">
                <div>
                  <h3>Become part of our team! </h3>
                  <a href="mailto:orders@thefalconlab.com">
                    Email us your resume
                  </a>
                </div>
              </Flex>
            </div>
          )}
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
    h4: {
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
  '.apply': {
    px: 2,
    py: 2,
    width: ['100%', '50%', '66%', '75%'],
    '.content': {
      alignItems: 'flex-end',
      p: 20,
      bg: 'black',
      height: '100%',
      h3: {
        color: 'white',
      },
    },
  },
}
