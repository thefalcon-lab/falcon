/** @jsx jsx */
import { jsx, Container, Flex, Box } from 'theme-ui'
import React, { useRef, useEffect, useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BgImage from './images/BgImage'
// import ScrollMagic from 'scrollmagic'
import * as ScrollMagic from 'scrollmagic-with-ssr'
import { TweenMax, TimelineMax } from 'gsap'
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap'
// import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax)
// import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'

const Parallax = (props) => {
  // const [elements, setElements] = useState({})
  const overlayRef = useRef(null),
    triggerRef = useRef(null),
    textOneRef = useRef(null),
    textTwoRef = useRef(null)
  // triggerEl = triggerRef.current,
  // overlayEl = overlayRef.current,
  // textOneEl = textOneRef.current,
  // textTwoEl = textTwoRef.current

  useEffect(() => {
    const controller = new ScrollMagic.Controller()
    var parallaxTl = new TimelineMax()
    parallaxTl
      .to('.overlay', 2, { backgroundColor: 'rgba(0,0,0,.85)' })
      .to('.textOne', 1, { y: -300, autoAlpha: 0 }, 0)
      .from('.textTwo', 1, { y: 300, autoAlpha: 0 }, 0.5)

    var parallaxScene = new ScrollMagic.Scene({
      triggerElement: '.slideOne',
      triggerHook: 0,
      duration: '70%',
    })
      .setPin('.slideOne')
      .setTween(parallaxTl)
      .addIndicators()
      .addTo(controller)
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
    <Box className="slideOne" ref={triggerRef} sx={{ ...styles }} {...props}>
      <BgImage img={heroImage} className="bgImage" sx={{ minHeight: '100vh' }}>
        <Flex ref={overlayRef} className="overlay">
          <h1 ref={textOneRef} className="textOne">
            this is your <span>Design Lab</span>
          </h1>
          <h2 ref={textTwoRef} className="textTwo">
            At The Falcon Lab, We strive to intimately understand your brand so
            we are able to fluidly execute your vision.
          </h2>
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
    '.textOne': {
      fontSize: [50, 80],
    },
    '.textTwo': {
      opacity: 0,
      visibilty: 'hidden',
      maxWidth: 550,
      lineHeight: 1.3,
      fontSize: 45,
    },
  },
}
