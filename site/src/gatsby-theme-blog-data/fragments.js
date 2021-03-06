import { graphql } from 'gatsby'

export const fragments = graphql`
  fragment ImageFluidFragment on WpMediaItem {
    altText
    sourceUrl
    localFile {
      publicURL
      childImageSharp {
        fluid(maxWidth: 1200, maxHeight: 600, quality: 80) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }

  fragment ImageBlockFragment on WpMediaItem {
    altText
    sourceUrl
    localFile {
      publicURL
      childImageSharp {
        fluid(maxWidth: 1200, quality: 80) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
  fragment ImageCoverFragment on WpMediaItem {
    altText
    sourceUrl
    localFile {
      publicURL
      childImageSharp {
        fluid(maxWidth: 1920, quality: 80) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }

  fragment galleryImageFragment on WpMediaItem {
    altText
    sourceUrl
    localFile {
      publicURL
      childImageSharp {
        fluid(maxWidth: 700, quality: 80) {
          aspectRatio
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }

  fragment ImageTeamFragment on WpMediaItem {
    altText
    sourceUrl
    localFile {
      publicURL
      childImageSharp {
        fluid(maxWidth: 600, quality: 80) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
  fragment PostTemplateFragment_starter on WpPost {
    id
    uri
    slug
    title
    excerpt
    date
    databaseId
    postSubtitle {
      postSubtitle
    }
    template {
      ...PageTemplates_starter
    }
    featuredImage {
      ...ImageFluidFragment
    }
    categories {
      nodes {
        id
        slug
        name
        uri
      }
    }
    author {
      name
      slug
      uri
      avatar {
        url
      }
    }
    tags {
      nodes {
        name
        slug
        uri
      }
    }
  }
  fragment PageTemplates_starter on WpContentTemplateUnion {
    ... on WpDefaultTemplate {
      templateName
    }
    ... on WpFullWidthTemplate {
      templateName
    }
    ... on WpLeftSidebarTemplate {
      templateName
    }
    ... on WpRightSidebarTemplate {
      templateName
    }
  }
`
