/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { useEffect } from 'react'
import { gsap, Linear } from 'gsap'

import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import {
  DesignLab,
  PrintLab,
  MarketingLab,
  WebDevLab,
  PromoLab,
  ApparelLab,
} from './letters'

const Letters = (props) => {
  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(DrawSVGPlugin)
      gsap.core.globals('DrawSVGPlugin', DrawSVGPlugin)
    }
    gsap.set(['.design-lab', '.print-lab'], { autoAlpha: 0 })

    function designAnimation() {
      let tl = gsap.timeline({
        defaults: { duration: 0.18, ease: Linear.easeNone },
      })
      tl.to('.design-lab', { autoAlpha: 1 })
        .fromTo(
          '.design-lab #mask-d-line',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.design-lab #mask-d-round',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.design-lab #mask-e',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.design-lab #mask-s',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.design-lab #mask-i',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true, duration: 0.18 }
        )
        .fromTo(
          '.design-lab #mask-i-dot',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true, duration: 0.18 }
        )
        .fromTo(
          '.design-lab #mask-g',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.design-lab #mask-n',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo('.design-lab #mask-l', { drawSVG: '0% 0%' }, { drawSVG: true })
        .fromTo('.design-lab #mask-a', { drawSVG: '0% 0%' }, { drawSVG: true })
        .fromTo('.design-lab #mask-b', { drawSVG: '0% 0%' }, { drawSVG: true })

        .to('.design-lab', { autoAlpha: 0 }, '+=0.8')
      return tl
    }

    function printAnimation() {
      let tl = gsap.timeline({
        defaults: { duration: 0.18, ease: Linear.easeNone },
      })
      tl.to('.print-lab', { autoAlpha: 1 })
        .fromTo(
          '#mask-p-line',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '#mask-p-circle',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '#mask-r',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '#mask-i-2',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true },
          '-=0.05'
        )
        .fromTo(
          '#mask-n',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true },
          '-=0.05'
        )
        .fromTo(
          '#mask-t-line-ver',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true },
          '-=0.05'
        )
        .fromTo(
          '#mask-i-dot',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '#mask-t-line-hor',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.print-lab #print-lab-l',
          { drawSVG: '0% 0%' },
          { drawSVG: true }
        )
        .fromTo(
          '.print-lab #print-lab-a',
          { drawSVG: '0% 0%' },
          { drawSVG: true }
        )
        .fromTo(
          '.print-lab #print-lab-b',
          { drawSVG: '0% 0%' },
          { drawSVG: true }
        )
        .to('.print-lab', { autoAlpha: 0 }, '+=0.5')

      return tl
    }

    let master = gsap.timeline({
      onComplete: function () {
        this.restart()
      },
    })
    master.add(designAnimation()).add(printAnimation(), '+=0.7')
    master.play()
  }, [])

  return (
    <>
      <DesignLab />
      <PrintLab />
    </>
  )
}

export default Letters
