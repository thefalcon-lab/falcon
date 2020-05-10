/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
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
      className={`${cssclass || ''} contentBlock`}
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
      {team.length > 0 &&
        team.map((item, i) => {
          const { image, name, role } = item
          return (
            <Box key={i} className="teamMember">
              <BgImage img={image}>
                <Box className="content">
                  <h3>{name}</h3>
                  <h4>{role}</h4>
                </Box>
              </BgImage>
            </Box>
          )
        })}
    </Box>
  )
}
const styles = {
  '&.aboutSubtitle,&.aboutContent': {
    '.container': {
      maxWidth: 'm',
    },
  },
  '&.aboutSubtitle': {
    mt: [50, 100],
    variant: 'text.subtitle',
  },
  '&.aboutContent': {
    mb: [50, 100],
    mt: 20,
  },
}
