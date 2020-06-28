/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useEffect, Fragment } from 'react'
import { gsap, Linear } from 'gsap'

import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import {
  DesignLab,
  PrintLab,
  MarketingLab,
  WebDevLab,
  PromoLab,
  AppLab,
  ExpLab,
} from './letters'

const Letters = (props) => {
  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(DrawSVGPlugin)
      gsap.core.globals('DrawSVGPlugin', DrawSVGPlugin)
    }
    gsap.set(
      [
        '.design-lab',
        '.print-lab',
        '.marketing-lab',
        '.promo-lab',
        '.web-dev-lab',
        '.apparel-lab',
        '.experiential-lab',
      ],
      { autoAlpha: 0 }
    )

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
          { drawSVG: true, duration: 0.2 }
        )
        .fromTo(
          '.design-lab #mask-i-dot',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true, duration: 0.2 }
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
        .to('.design-lab', { autoAlpha: 0 }, '+=0.18')
      return tl
    }

    function printAnimation() {
      let tl = gsap.timeline({
        defaults: { duration: 0.18, ease: Linear.easeNone },
      })
      tl.to('.print-lab', { autoAlpha: 1 })
        .fromTo(
          '.print-lab #mask-p-line',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.print-lab #mask-p-circle',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.print-lab #mask-r',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.print-lab #mask-i-2',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true },
          '-=0.05'
        )
        .fromTo(
          '.print-lab #mask-n',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true },
          '-=0.05'
        )
        .fromTo(
          '.print-lab #mask-t-line-ver',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true },
          '-=0.05'
        )
        .fromTo(
          '.print-lab #mask-i-dot',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.print-lab #mask-t-line-hor',
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
        .to('.print-lab', { autoAlpha: 0 }, '+=0.18')
      return tl
    }
    function marketingAnimation() {
      let tl = gsap.timeline({
        defaults: { duration: 0.18, ease: Linear.easeNone },
      })
      tl.to('.marketing-lab', { autoAlpha: 1 })
        .fromTo(
          '.marketing-lab #mask-M',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.marketing-lab #mask-a',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.marketing-lab #mask-r',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.marketing-lab #mask-k-1',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.marketing-lab #mask-k-2',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.marketing-lab #mask-e',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.marketing-lab #mask-t-line-v',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.marketing-lab #mask-t-line-h',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.marketing-lab #mask-i-2',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.marketing-lab #mask-i-dot',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.marketing-lab #mask-n',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.marketing-lab #mask-g',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.marketing-lab #mask-lab-l',
          { drawSVG: '0% 0%' },
          { drawSVG: true }
        )
        .fromTo(
          '.marketing-lab #mask-lab-a',
          { drawSVG: '0% 0%' },
          { drawSVG: true }
        )
        .fromTo(
          '.marketing-lab #mask-lab-b',
          { drawSVG: '0% 0%' },
          { drawSVG: true }
        )
        .to('.marketing-lab', { autoAlpha: 0 }, '+=0.18')
      return tl
    }
    function promoAnimation() {
      let tl = gsap.timeline({
        defaults: { duration: 0.18, ease: Linear.easeNone },
      })
      tl.to('.promo-lab', { autoAlpha: 1 })
        .fromTo(
          '.promo-lab #mask-p-line',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.promo-lab #mask-p-circle',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.promo-lab #mask-r',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.promo-lab #mask-o-1',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.promo-lab #mask-m',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.promo-lab #mask-o-2',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.promo-lab #mask-lab-l',
          { drawSVG: '0% 0%' },
          { drawSVG: true }
        )
        .fromTo(
          '.promo-lab #mask-lab-a',
          { drawSVG: '0% 0%' },
          { drawSVG: true }
        )
        .fromTo(
          '.promo-lab #mask-lab-b',
          { drawSVG: '0% 0%' },
          { drawSVG: true }
        )
        .to('.promo-lab', { autoAlpha: 0 }, '+=0.18')
      return tl
    }
    function webDevAnimation() {
      let tl = gsap.timeline({
        defaults: { duration: 0.18, ease: Linear.easeNone },
      })
      tl.to('.web-dev-lab', { autoAlpha: 1 })
        .fromTo(
          '.web-dev-lab #mask-W',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.web-dev-lab #mask-e-1',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.web-dev-lab #mask-b',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.web-dev-lab #and',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.web-dev-lab #mask-d-line',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.web-dev-lab #mask-d-round',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.web-dev-lab #mask-e-2',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.web-dev-lab #mask-v',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.web-dev-lab #mask-lab-l',
          { drawSVG: '0% 0%' },
          { drawSVG: true }
        )
        .fromTo(
          '.web-dev-lab #mask-lab-a',
          { drawSVG: '0% 0%' },
          { drawSVG: true }
        )
        .fromTo(
          '.web-dev-lab #mask-lab-b',
          { drawSVG: '0% 0%' },
          { drawSVG: true }
        )
        .to('.web-dev-lab', { autoAlpha: 0 }, '+=0.18')
      return tl
    }
    function apparelAnimation() {
      let tl = gsap.timeline({
        defaults: { duration: 0.18, ease: Linear.easeNone },
      })
      tl.to('.apparel-lab', { autoAlpha: 1 })
        .fromTo(
          '.apparel-lab #mask-A',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.apparel-lab #mask-p-1',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.apparel-lab #mask-p-2',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.apparel-lab #mask-a-2',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.apparel-lab #mask-r',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.apparel-lab #mask-e',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.apparel-lab #mask-l',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.apparel-lab #mask-lab-l',
          { drawSVG: '0% 0%' },
          { drawSVG: true }
        )
        .fromTo(
          '.apparel-lab #mask-lab-a',
          { drawSVG: '0% 0%' },
          { drawSVG: true }
        )
        .fromTo(
          '.apparel-lab #mask-lab-b',
          { drawSVG: '0% 0%' },
          { drawSVG: true }
        )
        .to('.apparel-lab', { autoAlpha: 0 }, '+=0.18')
      return tl
    }
    function experiantialAnimation() {
      let tl = gsap.timeline({
        defaults: { duration: 0.18, ease: Linear.easeNone },
      })
      tl.to('.experiential-lab', { autoAlpha: 1 })
        .fromTo(
          '.experiential-lab #mask-E-top',
          {
            drawSVG: '0% 0%',
          },
          { duration: 0.2, drawSVG: true }
        )
        .fromTo(
          '.experiential-lab #mask-E-bottom',
          {
            drawSVG: '0% 0%',
          },
          { duration: 0.2, drawSVG: true }
        )
        .fromTo(
          '.experiential-lab #mask-E-center',
          {
            drawSVG: '0% 0%',
          },
          { duration: 0.2, drawSVG: true }
        )
        .fromTo(
          '.experiential-lab #mask-x-1',
          {
            drawSVG: '0% 0%',
          },
          { duration: 0.2, drawSVG: true }
        )
        .fromTo(
          '.experiential-lab #mask-x-2',
          {
            drawSVG: '0% 0%',
          },
          { duration: 0.2, drawSVG: true }
        )
        .fromTo(
          '.experiential-lab #mask-p',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.experiential-lab #mask-e-1',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.experiential-lab #mask-r',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.experiential-lab #mask-i-1-v',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.experiential-lab #mask-i-1-dot',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.experiential-lab #mask-e-2',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.experiential-lab #mask-n',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.experiential-lab #mask-t-v',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.experiential-lab #mask-t-h',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.experiential-lab #mask-i-2-v',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.experiential-lab #mask-i-2-dot',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.experiential-lab #mask-a',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.experiential-lab #mask-l',
          {
            drawSVG: '0% 0%',
          },
          { drawSVG: true }
        )
        .fromTo(
          '.experiential-lab #mask-lab-l',
          { drawSVG: '0% 0%' },
          { drawSVG: true }
        )
        .fromTo(
          '.experiential-lab #mask-lab-a',
          { drawSVG: '0% 0%' },
          { drawSVG: true }
        )
        .fromTo(
          '.experiential-lab #mask-lab-b',
          { drawSVG: '0% 0%' },
          { drawSVG: true }
        )
        .to('.experiential-lab', { autoAlpha: 0 }, '+=0.18')
      return tl
    }

    let master = gsap.timeline({
      onComplete: function () {
        this.restart()
      },
    })
    master
      .add(designAnimation())
      .add(printAnimation(), '+=0.7')
      .add(marketingAnimation(), '+=0.7')
      .add(promoAnimation(), '+=0.7')
      .add(webDevAnimation(), '+=0.7')
      .add(apparelAnimation(), '+=0.7')
      .add(experiantialAnimation(), '+=0.7')
    master.play()
  }, [])

  return (
    <Fragment>
      <DesignLab />
      <PrintLab />
      <MarketingLab />
      <PromoLab />
      <WebDevLab />
      <AppLab />
      <ExpLab />
    </Fragment>
  )
}

export default Letters
