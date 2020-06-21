/** @jsx jsx */
import { jsx, Flex, Box, Container } from 'theme-ui'
import React, { useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BgImage from './images/BgImage'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Letters from '../images/lettersAnim.inline.svg'
import { FormDown } from 'grommet-icons'

const Parallax = (props) => {
  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin)
      gsap.core.globals(
        'ScrollTrigger,DrawSVGPlugin',
        ScrollTrigger,
        DrawSVGPlugin
      )
    }

    gsap.fromTo(
      '.textWrap',
      { autoAlpha: 0, y: 50 },
      { duration: 1.5, autoAlpha: 1, y: 0, delay: 1 }
    )
    let tl = gsap.timeline({
      // paused: true,
      scrollTrigger: {
        trigger: '.slideOne',
        scrub: true,
        pin: true,
        // markers: true,
        start: 'top top',
        end: 'bottom top',
      },
    })
    tl.to('.overlay', 2, { backgroundColor: 'rgba(0,0,0,.85)' })
    tl.to(['.textOne, .letters'], 1, { y: -300, autoAlpha: 0 }, 0)

    tl.to('.textTwo', 1, { y: -300, autoAlpha: 1 }, 0.5)

    //letters

    gsap.set('.design-lab', { visibility: 'visible' })

    function designAnimation() {
      console.log('dfdf')
      let tl2 = gsap.timeline({
        defaults: { duration: 0.3, ease: Linear.easeNone },
      })
      tl2
        .fromTo(
          '#mask-d',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '#mask-e',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '#mask-s',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '#mask-i',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true, duration: 0.2 }
        )
        .fromTo(
          '#mask-i-dot',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true, duration: 0.2 }
        )
        .fromTo(
          '#mask-g',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '#mask-n',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
      return tl2
    }

    let tl2 = gsap.timeline({
      defaults: { duration: 0.3, ease: Linear.easeNone },
    })
    tl2
      .fromTo('#mask-l', { drawSVG: '0% 0%' }, { drawSVG: true })
      .fromTo('#mask-a', { drawSVG: '0% 0%' }, { drawSVG: true })
      .fromTo('#mask-b', { drawSVG: '0% 0%' }, { drawSVG: true })
    return tl2
  }, [])

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
    <Box id="top" className="slideOne" sx={{ ...styles }} {...props}>
      <BgImage
        img={heroImage}
        className="bgImage"
        backgroundColor="black"
        sx={{ minHeight: '100vh', bg: 'black' }}
      >
        <Flex className="overlay">
          <Container
            className="textWrap"
            sx={{
              position: 'relative',
            }}
          >
            <h1
              className="textOne"
              sx={{
                float: ['none', 'none', 'none', 'left'],
                textAlign: 'center',
                mr: 25,
                mb: 0,
              }}
            >
              this is your{' '}
            </h1>
            <div
              className="letters"
              sx={{
                position: 'relative',
                top: [-50, 0, 0, -50],
                ml: 25,
                svg: {
                  float: 'left',
                  maxWidth: ['100%'],
                  visibility: 'hidden',
                  fill: '#DB3C2D',
                  '.mask': {
                    fill: 'none',
                    stroke: '#fff',
                    strokeMiterlimit: 10,
                  },
                },
              }}
            >
              <Letters />
            </div>
          </Container>
          <h2 className="textTwo">
            At The Falcon Lab, We strive to intimately understand your brand so
            we are able to fluidly execute your vision.
          </h2>
        </Flex>
        <Flex
          sx={{
            height: '100vh',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'flex-end',
            pb: 50,
          }}
        >
          <AnchorLink href="#brand" sx={{ position: 'relative', bottom: 0 }}>
            <Flex className="scrollDown">
              <FormDown
                color="white"
                size="large"
                sx={{ polyline: { strokeWidth: 1 } }}
              />
            </Flex>
          </AnchorLink>
        </Flex>
      </BgImage>
    </Box>
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
    '.textWrap': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translateY(-50%)',
      transform: 'translateX(-50%)',
    },
    '.textOne': {
      fontSize: [30, 50, 80],
    },
    '.textTwo': {
      maxWidth: 550,
      px: [50, 0],
      lineHeight: 1.3,
      fontSize: [25, 30, 45],
      position: 'relative',
      top: 200,
      opacity: 0,
      visibility: 'hidden',
    },
  },
}
