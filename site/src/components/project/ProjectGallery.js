/** @jsx jsx */
import { jsx, Box, Flex } from 'theme-ui'

export const ProjectGallery = ({ items, ...props }) => (
  <Flex className="gallery" sx={{ ...styles }} {...props}>
    {/* {items && items.map((item, i)=> {
      return <Box>

      </Box>

    })} */}
  </Flex>
)

const styles = {
  flexWrap: 'wrap',
}
