/** @jsx jsx */
import { jsx, Container, Flex, Box } from 'theme-ui'
import Layout from '../Layout'
import ParsedContent from '../../utils/ParsedContent'
import SEO from '../seo/Seo'
import useThemeOptions from 'gatsby-theme-blog-data/src/hooks/useThemeOptions'
import Sidebar from '../Sidebar'
import articleStyles from '../../styles/articleStyles'
import gutenberg from '../../styles/theme-gutenberg'
import {
  ButtonBlock,
  ContentBlock,
  HeadingBlock,
  ImageBlock,
  // ProjectsBlock,
  CoverBlock,
  ColumnsBlock,
  SpacerBlock,
  TeamBlock,
  // TestimonialsBlock,
  // SubscribeBlock,
} from '../AcfBlocks'

const Page = ({ page }) => {
  const {
    title,
    excerpt,
    content,
    slug,
    uri,
    template: { templateName },
    flexLayouts: { flexibleLayouts },
  } = page
  const pageTemplate = templateName.toLowerCase()
  const { skipTitle, layoutWidth, sidebarWidgets } = useThemeOptions()

  const ogType = page.isFrontPage ? 'website' : 'article'
  const sidebarPage = pageTemplate.includes('sidebar')

  const containerStyles =
    sidebarWidgets && sidebarPage
      ? {
          '.entry': {
            width: [`100%`, `100%`, `100%`, `70%`],
          },
          '.sidebar': { width: [`100%`, `100%`, `100%`, `30%`] },
        }
      : { maxWidth: layoutWidth.page }

  const sidebarSide = sidebarPage
    ? pageTemplate === `left sidebar`
      ? {
          flexDirection: `row-reverse`,
          '.entry': { pl: [0, 0, 0, layoutWidth.page] },
        }
      : pageTemplate === `right sidebar`
      ? { '.entry': { pr: [0, 0, 0, layoutWidth.page] } }
      : ''
    : ''

  return (
    <Layout page={page} type="page">
      <SEO
        title={title}
        description={excerpt}
        ogType={ogType}
        ogUrl={ogType === 'website' ? '' : uri}
      />
      {/* <Container sx={{ ...containerStyles }} className="mainContainer">
        <Flex
          sx={{
            ...sidebarSide,
            flexWrap: [`wrap`, `wrap`, `wrap`, `nowrap`],
            alignItems: `flex-start`,
          }}
        >
          <article
            sx={{
              ...articleStyles,
              width: `100%`,
              borderBottom: `none`,
            }}
            className="entry"
          >
            <div className="content page-content" sx={{ borderRadius: `s` }}>
              {skipTitle &&
                !skipTitle.includes(slug) &&
                skipTitle !== 'all' && (
                  <h1
                    className="page-title"
                    dangerouslySetInnerHTML={{ __html: title }}
                  />
                )}

              <Box className="entry-content" sx={{ ...gutenberg }}>
                <ParsedContent content={content} />
              </Box>
            </div>
          </article>
          {sidebarPage && <Sidebar widgets={sidebarWidgets} />}
        </Flex>
      </Container> */}
      {flexibleLayouts &&
        flexibleLayouts.length > 0 &&
        flexibleLayouts.map((block) => {
          switch (block.__typename) {
            case 'WpPage_Flexlayouts_FlexibleLayouts_ContentBlock':
              return <ContentBlock {...block} />
            case 'WpPage_Flexlayouts_FlexibleLayouts_HeadingBlock':
              return <HeadingBlock {...block} />
            case 'WpPage_Flexlayouts_FlexibleLayouts_ImageBlock':
              return <ImageBlock {...block} />
            case 'WpPage_Flexlayouts_FlexibleLayouts_ButtonBlock':
              return <ButtonBlock {...block} />

            case 'WpPage_Flexlayouts_FlexibleLayouts_CoverBlock':
              return <CoverBlock {...block} />
            case 'WpPage_Flexlayouts_FlexibleLayouts_ColumnsBlock':
              return <ColumnsBlock {...block} />
            case 'WpPage_Flexlayouts_FlexibleLayouts_SpacerBlock':
              return <SpacerBlock {...block} />
            case 'WpPage_Flexlayouts_FlexibleLayouts_TeamBlock':
              return <TeamBlock {...block} />

            default:
              return ''
          }
        })}
    </Layout>
  )
}

export default Page
