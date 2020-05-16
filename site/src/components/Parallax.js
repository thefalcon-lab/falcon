/** @jsx jsx */
import { jsx, Container, Flex, Box } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import BgImage from './images/BgImage'
import ParsedContent from '../utils/ParsedContent'

const Parallax = (props) => {
  const data = useStaticQuery(graphql`
    query {
      wp {
        themeOptions {
          homeImage {
            heroImage {
              ...ImageCoverFragment
            }
          }
        }
      }
    }
  `)

  const { heroImage } = data.wp.themeOptions.homeImage

  return (
    <BgImage
      img={heroImage}
      className="bgImage"
      sx={{ minHeight: 800, position: 'relative' }}
      {...props}
    >
      <Flex className="overlay" sx={{ ...overlayStyles }}>
        <h1 className="textOne">
          this is your <span>Design Lab</span>
        </h1>
        <h2 className="textTwo">
          At The Falcon Lab, We strive to intimately understand your brand so we
          are able to fluidly execute your vision.{' '}
        </h2>
      </Flex>
    </BgImage>
  )
}

export default Parallax

const overlayStyles = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  bg: 'rgba(0,0,0,.6)',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',

  '.textOne, .textTwo': {
    color: 'white',
    span: {
      fontFamily: 'have_heart_oneregular',
      color: 'primary',
    },
  },
  '.textOne': {
    fontSize: [50, 80],
  },
  '.textTwo': {
    display: 'none',
  },
}
