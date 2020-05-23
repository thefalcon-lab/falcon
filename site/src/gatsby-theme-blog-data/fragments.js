import { graphql } from 'gatsby'

export const fragments = graphql`
  fragment ImageFluidFragment on WpMediaItem {
    altText
    sourceUrl
    localFile {
      publicURL
      childImageSharp {
        fluid(maxWidth: 1200, maxHeight: 600, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp
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
          ...GatsbyImageSharpFluid_withWebp
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
        fluid(maxWidth: 1920, toFormat: WEBP, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp
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
        fluid(maxWidth: 500, toFormat: WEBP, quality: 80) {
          aspectRatio
          ...GatsbyImageSharpFluid_withWebp
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
        fluid(maxWidth: 600, toFormat: WEBP, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp
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
