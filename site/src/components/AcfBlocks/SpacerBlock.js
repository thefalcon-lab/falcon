/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import { graphql } from 'gatsby'
import { Spacer } from '../ui-components'

export const fragment = graphql`
  fragment spacerBlockFragment on WpPage_Flexlayouts_FlexibleLayouts_SpacerBlock {
    cssclass
  }
`

export const SpacerBlock = ({ cssclass, ...props }) => (
  <div className={` ${cssclass || ''}`} sx={{ ...styles }} {...props}>
    <Container className="container">
      <Spacer className="spacer" />
    </Container>
  </div>
)

const styles = {
  '&.aboutSpacer': {
    '.spacer': {
      width: 200,
    },
    '.container': { display: 'flex', justifyContent: 'center' },
  },
}
