/** @jsx jsx */
import { jsx } from 'theme-ui'
import { motion } from 'framer-motion'

export const MasonryItem = ({ height, img, bgc, children, ...props }) => {
  return (
    <motion.div
      positionTransition={{
        damping: 100,
        stiffness: 10,
      }}
      className="masonryItem"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: `300px`,
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
        sx={{ m: 0, minWidth: '100%', minHeight: '100%' }}
      />
      {children}
    </motion.div>
  )
}
