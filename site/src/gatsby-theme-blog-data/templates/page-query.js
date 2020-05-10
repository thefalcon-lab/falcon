import { graphql } from 'gatsby'
import Page from '../components/Page'

export default Page

export const pageQuery = graphql`
  query GET_PAGE_STARTER($uri: String!) {
    wpPage(uri: { eq: $uri }) {
      title
      content
      uri
      slug
      isFrontPage
      flexLayouts {
        flexibleLayouts {
          __typename
          ...contentBlockFragment
          # ...projectsBlockFragment
          ...imageBlockFragment
          ...headingBlockFragment
          ...buttonBlockFragment
          ...coverBlockFragment
          ...columnsBlockFragment
          ...spacerBlockFragment
          # ...testimonialsBlockFragment
          # ...subscribeBlockFragment
        }
      }
      template {
        ...PageTemplates_starter
      }
    }
  }
`
