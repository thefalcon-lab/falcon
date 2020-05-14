/** @jsx jsx */
import { jsx, Flex, Box } from 'theme-ui'
import React, { useState } from 'react'
import { Masonry } from '../components/ui-components'
import shuffle from 'lodash/shuffle'
import styled from 'styled-components'

const images = [
  'https://picsum.photos/400/300',
  'https://picsum.photos/400/500',
  'https://picsum.photos/400/300',
  'https://picsum.photos/400/600',
  'https://picsum.photos/400/400',
  'https://picsum.photos/400/500',
  'https://picsum.photos/400/700',
  'https://picsum.photos/400/500',
]

const ColorBox = styled.div`
  transition: 0.4s;
  justify-content: center;
  align-content: center;
  display: grid;
  color: white;
  cursor: pointer;

  /* :hover {
    transform: scale(1.1);
    box-shadow: 0 0 12px 0 ${(props) => props.theme.lightGray};
  } */
`

const data = [
  [`5em`, `linear-gradient(45deg, #f05f70, #164b78)`],
  [`2em`, `linear-gradient(45deg, #5cb767, #2e9fff)`],
  [`4em`, `linear-gradient(45deg, #e0c3fc, #8ec5fc)`],
  [`7em`, `linear-gradient(45deg, #f093fb, #f5576c)`],
  [`1em`, `linear-gradient(45deg, #ffd34f, #2e9fff)`],
  [`3em`, `linear-gradient(45deg, #d299c2, #fef9d7)`],
  [`2em`, `linear-gradient(45deg, #f6d365, #fda085)`],
  [`5em`, `linear-gradient(45deg, #164b78, #ffd34f)`],
  [`5em`, `linear-gradient(45deg, #96fbc4, #f9f586)`],
]

const data2 = [
  [`600px`, `url(https://picsum.photos/400/600)`, `design`],
  [`300px`, `url(https://picsum.photos/400/300)`, `design`],
  [`100px`, `url(https://picsum.photos/400/100)`, `print`],
  [`200px`, `url(https://picsum.photos/400/200)`, `design`],
  [`400px`, `url(https://picsum.photos/400/400)`, `print`],
  [`300px`, `url(https://picsum.photos/400/300)`, `design`],
  [`250px`, `url(https://picsum.photos/400/250)`, `print`],
  [`700px`, `url(https://picsum.photos/400/700)`, `design`],
  [`300px`, `url(https://picsum.photos/400/300)`, `design`],
]

export default () => {
  const [divs, setDivs] = useState(data2)
  //   console.log
  const designDivs = data2.filter((item) => item.includes('design'))
  console.log('design', designDivs)
  return (
    <div>
      <h1>Masonry</h1>
      <Masonry minWidth={500} gap="1px" css="margin: 2em 0;">
        {/* {images.map((img, i) => (
          <img key={i} src={img} />
        ))} */}
        {divs.map(([minHeight, backgroundImage], index) => (
          <ColorBox
            key={index}
            sx={{
              backgroundImage,
              backgroundSize: 'cover',
              backgroundrepeat: 'no-repeat',
              minHeight,
            }}
            onClick={() => setDivs(designDivs)}
          >
            {/* {index + 1} */}
          </ColorBox>
        ))}
      </Masonry>
    </div>
  )
}
