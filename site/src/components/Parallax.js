/** @jsx jsx */
import { jsx, Container, Flex, Box } from 'theme-ui'
import React, { useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BgImage from './images/BgImage'
import * as ScrollMagic from 'scrollmagic-with-ssr'
import { TweenMax, TimelineMax } from 'react-gsap'
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap'

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax)

const Parallax = (props) => {
  let overlayRef = useRef(null),
    textOneRef = useRef(null),
    textTwoRef = useRef(null),
    overlayEl = overlayRef.current,
    textOneEl = textOneRef.current,
    textTwoEl = textTwoRef.current

  let controller = new ScrollMagic.Controller()
  // const bgTween = new TweenMax.from(overlayEl,)

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
    <Box sx={{ ...styles }} {...props}>
      <BgImage img={heroImage} className="bgImage" sx={{ minHeight: 800 }}>
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
      // opacity: 0,
      // visibilty: 'hidden',
      maxWidth: 550,
      lineHeight: 1.3,
      fontSize: 45,
    },
  },
}
