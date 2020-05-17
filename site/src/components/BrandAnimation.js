/** @jsx jsx */
import { jsx, Container, Flex, Box } from 'theme-ui'
import Brand from './Brand'

const BrandAnimation = () => {
  return (
    <Box sx={{ bg: 'black' }}>
      <img src={'./brand.svg'} />
    </Box>
  )
}

export default BrandAnimation
