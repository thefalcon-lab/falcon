/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useEffect } from 'react'
import Brand from '../../Brand'
import { gsap } from 'gsap'

const Services = (props) => {
  useEffect(() => {
    const tl = gsap.timeline()
    tl.from(['.yourBrand'], { duration: 1, y: 50, opacity: 0 })
    tl.from(['.line,.arrow,.img'], { duration: 3, opacity: 0 })
  }, [])
  return (
    <div sx={{ bg: 'black', height: '100%', p: [0, 25, 50] }} {...props}>
      <Brand />
    </div>
  )
}

export default Services
