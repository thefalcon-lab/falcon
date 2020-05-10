/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql } from 'gatsby'
import { Spacer } from '../ui-components'

export const fragment = graphql`
  fragment spacerBlockFragment on WpPage_Flexlayouts_FlexibleLayouts_SpacerBlock {
    cssclass
  }
`

export const SpacerBlock = ({ cssclass, ...props }) => (
  <Spacer className={`spacer ${cssclass || ''}`} {...props} />
)
