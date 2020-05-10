import { graphql } from 'gatsby'
import Blog from '../components/Posts'

export default Blog

export const pageQuery = graphql`
  query GET_POSTS_STARTER($skip: Int!, $limit: Int!) {
    allWpPost(limit: $limit, skip: $skip) {
      nodes {
        ...PostTemplateFragment_starter
      }
    }
  }
`
