/** @jsx jsx */
import { jsx, Flex, Box } from 'theme-ui'
import BgImage from '../../images/BgImage'

export const FooterGallery = ({ gallery }) => {
  return (
    <Flex
      className="footerGallery"
      sx={{
        flexWrap: 'wrap',
        '.item': {
          p: 2,
        },
      }}
    >
      <Box
        sx={{ minWidth: ['50%', '50%', '30%'], height: [300, 500, 600] }}
        className="item"
      >
        <BgImage img={gallery[0]} sx={{ minHeight: '100%' }}></BgImage>
      </Box>
      <Box sx={{ minWidth: '50%', height: [300, 500, 600] }} className="item">
        <BgImage img={gallery[1]} sx={{ minHeight: '100%' }}></BgImage>
      </Box>
      <Flex
        sx={{
          flexWrap: 'wrap',
          minHeight: [300, 500, 600],
          minWidth: ['100%', '100%', '20%'],
        }}
      >
        <Box sx={{ minWidth: ['50%', '50%', '100%'] }} className="item">
          <BgImage img={gallery[2]} sx={{ minHeight: '100%' }}></BgImage>
        </Box>
        <Box sx={{ minWidth: ['50%', '50%', '100%'] }} className="item">
          <BgImage img={gallery[3]} sx={{ minHeight: '100%' }}></BgImage>
        </Box>
      </Flex>
    </Flex>
  )
}
