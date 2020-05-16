/** @jsx jsx */
import { jsx, Container, Flex, Box } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import BgImage from './images/BgImage'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween, Timeline } from 'react-gsap'

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
    <Controller>
      <Scene
        duration="100%"
        triggerHook="onLeave"
        pin={true}
        enabled={true}
        indicators={true}
      >
        {(progress) => (
          <Box sx={{ ...styles }} {...props}>
            <BgImage
              img={heroImage}
              className="bgImage"
              sx={{ minHeight: 800 }}
            >
              <Timeline totalProgress={progress} paused>
                <Tween
                  from={{ css: { background: 'rgba(0,0,0,.6)' } }}
                  to={{ css: { background: 'rgba(0,0,0,.8)' } }}
                >
                  <Flex className="overlay">
                    <Timeline
                      target={
                        <h1 className="textOne">
                          this is your <span>Design Lab</span>
                        </h1>
                      }
                    >
                      <Tween from={{ y: 200 }} to={{ y: 0 }} />
                      <Tween from={{ autoAlpha: 1 }} to={{ autoAlpha: 0 }} />
                    </Timeline>
                    <Timeline
                      target={
                        <h2 className="textTwo">
                          At The Falcon Lab, We strive to intimately understand
                          your brand so we are able to fluidly execute your
                          vision.{' '}
                        </h2>
                      }
                    >
                      <Tween
                        from={{ autoAlpha: 0, y: 100 }}
                        to={{ autoAlpha: 1, y: -100 }}
                      />
                    </Timeline>
                  </Flex>
                </Tween>
              </Timeline>
            </BgImage>
          </Box>
        )}
      </Scene>
    </Controller>
  )
}

export default Parallax

const styles = {
  position: 'relative',
  '.overlay': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    bg: 'rgba(0,0,0,.6)',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
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
      // opacity: 0,
      // visibilty: 'hidden',
      maxWidth: 550,
      lineHeight: 1.3,
      fontSize: 45,
    },
  },
}
