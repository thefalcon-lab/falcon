/** @jsx jsx */
import { jsx, Flex, Box, Container } from 'theme-ui'
import React, { useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BgImage from './images/BgImage'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Letters from './Letters'

import { FormDown } from 'grommet-icons'

const Parallax = (props) => {
  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger)
      gsap.core.globals('ScrollTrigger', ScrollTrigger)
    }

    gsap.fromTo(
      '.textWrap',
      { opacity: 0, y: 50 },
      { duration: 0.5, opacity: 1, y: 0, delay: 1 }
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
            <div className="letters">
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
    '.letters': {
      position: 'relative',
      top: [-50, 0, 0, -50],
      ml: 25,
      svg: { float: 'left', maxWidth: ['100%'] },

      '.design-lab,.print-lab,.marketing-lab,.promo-lab,.web-dev-lab,.apparel-lab,.experiential-lab': {
        cursor: 'pointer',
        fill: '#d83e00',
        position: 'absolute',
        left: 0,
        top: 0,
        visibility: 'hidden',
        opacity: 0,
        left: 420,
        height: 180,
      },
      '.design-lab .mask, .print-lab .mask, .marketing-lab .mask, .promo-lab .mask, .web-dev-lab .mask, .apparel-lab .mask, .experiential-lab .mask': {
        fill: 'none',
        stroke: '#fff',
        strokeMiterlimit: 10,
      },

      '.print-lab': {
        height: 160,
        top: 15,
      },
    },
  },
}
