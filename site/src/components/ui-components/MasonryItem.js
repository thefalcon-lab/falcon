/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'

export const MasonryItem = ({ height, img, bgc, children, ...props }) => {
  return (
    <Flex
      className="masonryItem"
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: `${height}px`,
        bg: `${bgc}`,
        position: 'relative',
        overflow: 'hidden',
        '&:hover': {
          '.overlay': {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
      }}
      {...props}
    >
      <img src={img} sx={{ m: 0 }} />
      {children}
    </Flex>
  )
}
