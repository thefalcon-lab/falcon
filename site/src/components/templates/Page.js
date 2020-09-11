/** @jsx jsx */
import { jsx } from 'theme-ui'
import Layout from '../Layout'
import SEO from '../seo/Seo'
import Brand from '../Brand'
import {
  ButtonBlock,
  ContentBlock,
  HeadingBlock,
  ImageBlock,
  CoverBlock,
  ColumnsBlock,
  SpacerBlock,
  TeamBlock,
  TestimonialsBlock,
  LogosBlock,
} from '../AcfBlocks'
import {
  ContactPage,
  WorkPage,
  FrontPageAnimations,
  FooterGallery,
  BragPage,
  TopProjects,
} from './templateParts'

const Page = ({ page }) => {
  const {
    title,
    excerpt,
    uri,
    flexLayouts: { flexibleLayouts },
    isFrontPage,
    footerGallery: { gallery },
  } = page

  const ogType = page.isFrontPage ? 'website' : 'article'

  return (
    <Layout page={page} type="page">
      <SEO
        title={title}
        description={excerpt}
        ogType={ogType}
        ogUrl={ogType === 'website' ? '' : uri}
      />
      {page.slug.includes('contact') && <ContactPage page={page} />}
      {page.slug.includes('work') && <WorkPage page={page} />}
      {page.slug.includes('services') && <Brand />}
      {page.slug.includes('brag') && <BragPage />}
      {isFrontPage && (
        <FrontPageAnimations
          page={page}
          sx={{ position: 'relative', top: -46 }}
        />
      )}
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
            case 'WpPage_Flexlayouts_FlexibleLayouts_TestimonialsBlock':
              return <TestimonialsBlock {...block} />
            case 'WpPage_Flexlayouts_FlexibleLayouts_LogosBlock':
              return <LogosBlock {...block} />

            default:
              return ''
          }
        })}
      {isFrontPage && <TopProjects />}
      {gallery?.length && <FooterGallery gallery={gallery} />}
    </Layout>
  )
}

export default Page
