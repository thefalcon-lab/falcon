/** @jsx jsx */
import { jsx, Container, Flex, Box } from 'theme-ui'
import { Brand } from './Brand'

const BrandAnimation = () => {
  return (
    <Box sx={{ bg: 'black' }}>
      <Brand
        sx={{
          '.st0': { color: 'white' },
          '.st1': { color: 'primary' },
          '.st2': { color: '#4D4D4D' },
        }}
      />
    </Box>
  )
}

export default BrandAnimation
