export default {
  '.gatsby-image-wrapper': {
    // py: 150,
    zIndex: 0,
  },
  '.overlay .content': {
    '&:after': {
      content: "''",
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      bg: 'dark',
      zIndex: -1,
      opacity: 0.6,
    },
  },
  // '.bgImage': {
  //   backgroundSize: ['content!important', 'content', 'cover'],
  // },

  '&.aboutHero': {
    m: 0,
    '.bgImage': {
      display: 'flex',
      alignItems: 'flex-end',
      height: [400, 650],
    },
    h1: {
      color: 'white',
      fontSize: [60, 90, 120],
      textShadow: '0 20px 20px rgba(0, 0, 0, 0.9)',
    },
  },
}
