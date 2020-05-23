/** @jsx jsx */
import { jsx, Box, Container, Flex } from 'theme-ui'
import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment logosBlockFragment on WpPage_Flexlayouts_FlexibleLayouts_LogosBlock {
    title
    cssclass
    anchor
    marginTop
    marginBottom
    logos {
      url
      image {
        localFile {
          publicURL
        }
      }
    }
  }
`

export const LogosBlock = ({
  title,
  button,
  content,
  marginTop,
  marginBottom,
  cssclass,
  anchor,
  logos,
  ...props
}) => {
  const margins = {
    mt: marginTop,
    mb: marginBottom,
  }

  return (
    <Box
      as="section"
      id={anchor}
      className={`${cssclass || ''} logosBlock`}
      sx={{
        ...margins,
        pt: 30,
        pb: 50,
      }}
      {...props}
    >
      <Container className="container">
        {title && (
          <h2
            dangerouslySetInnerHTML={{ __html: title }}
            sx={{ textAlign: 'center', fontSize: 40 }}
          />
        )}

        <Flex
          className="logosGrid"
          sx={{ flexWrap: 'wrap', justifyContent: 'center' }}
        >
          {logos &&
            logos.map((logo) => {
              const { url, image } = logo
              const WithLink = (url, children) => (
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {children}
                </a>
              )
              return (
                <Box
                  sx={{
                    minWidth: 200,
                    img: { m: 0 },
                  }}
                >
                  {url ? (
                    <WithLink>
                      <img
                        src={image.localFile.publicURL}
                        alt={image.altText}
                      />
                    </WithLink>
                  ) : (
                    <img src={image.localFile.publicURL} alt={image.altText} />
                  )}
                </Box>
              )
            })}
        </Flex>
      </Container>
    </Box>
  )
}
