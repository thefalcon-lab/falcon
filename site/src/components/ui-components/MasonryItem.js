/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { motion } from 'framer-motion'

export const MasonryItem = ({ height, img, bgc, children, ...props }) => {
  return (
    <div
      className="masonryItem"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: `${height}px`,
        bg: `${bgc}`,
        position: 'relative',
        overflow: 'hidden',
        variant: 'transitions.m',
        // p: 30,
        '&:hover': {
          '.overlay': {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
      }}
      {...props}
    >
      <motion.img
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2 }}
        src={img}
        sx={{ m: 0, minWidth: '100%' }}
      />
      {children}
    </div>
  )
}
