/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Fire } from '@gamepark/living-forest/material/Fire'
import { HTMLAttributes } from 'react'
import Images from '../images/Images'
import { fireHeight, fireWidth } from '../styles'

type Props = {
  fire: (number | null)
} & HTMLAttributes<HTMLDivElement>

export default function FireTile({ fire, ...props }: Props) {
  return (
    <div css={[style, fire ? front(fire) : null]} {...props} />
  )
}

const style = css`
  position: absolute;
  width:${fireWidth}em;
  height:${fireHeight}em;
  transform-style: preserve-3d;
  transform: translateZ(0);
  -webkit-font-smoothing: subpixel-antialiased;
  transition: transform 1s ease-in-out;

  &:before, &:after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-size: cover;
    backface-visibility: hidden;
  }

  &:after {
    background-image: url(${Images.sampleImage});
    transform: rotateY(-180deg);
  }
`

const front = (fire: Fire) => css`
  &:before {
    background-image: url(${FireImage[fire]});
  }
`

const FireImage: { [key in Fire]: string } = {
  [Fire.Fire2]: Images.fire2,
  [Fire.Fire3]: Images.fire3,
  [Fire.Fire4]: Images.fire4,
}
