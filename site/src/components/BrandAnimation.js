/** @jsx jsx */
import { jsx, Container, Flex, Box } from 'theme-ui'
// import { Brand } from './Brand'
import brand from '../images/brand.jpg'
import Image from './images/Image'

const BrandAnimation = () => {
  return (
    <Flex sx={{ bg: 'black', justifyContent: 'center' }}>
      {/* <Brand
        sx={{
          '.st0': { color: 'white' },
          '.st1': { color: 'primary' },
          '.st2': { color: '#4D4D4D' },
        }}
      /> */}
      <img src={brand} />
    </Flex>
  )
}

export default BrandAnimation
