/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'

export const MasonryItem = ({ height, img, bgc, ...props }) => {
  return (
    <Flex
      className="masonryItem"
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: `${height}px`,
        bg: `${bgc}`,
      }}
      {...props}
    >
      <img src={img} />
    </Flex>
  )
}
