/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'
import GuardianAnimal from '@gamepark/living-forest/material/GuardianAnimal'
import {HTMLAttributes} from 'react'
import Images from '../images/Images'

type Props = {
  guardianAnimal?: GuardianAnimal
} & HTMLAttributes<HTMLDivElement>

export default function Card({guardianAnimal, ...props}: Props) {
  return (
    <div css={[style, guardianAnimal ? front(guardianAnimal) : hidden]} {...props}/>
  )
}

const style = css`
  position: absolute;
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
    border-radius: 1em;
    box-shadow: 0 0 1em black, 0 0 1em black;
  }

  &:after {
    background-image: url(${Images.sampleImage});
    transform: rotateY(-180deg);
  }
`

const front = (guardianAnimal: GuardianAnimal) => css`
  &:before {
    background-image: url(${GuardianImage[guardianAnimal]});
  }
`

const GuardianImage: { [key in GuardianAnimal]: string } = {
  [GuardianAnimal.Bear]: Images.sampleImage,
  [GuardianAnimal.Beetle]: Images.sampleImage,
  [GuardianAnimal.Lynx]: Images.sampleImage,
  [GuardianAnimal.Fox]: Images.sampleImage,
  [GuardianAnimal.GoldFish]: Images.sampleImage,
  [GuardianAnimal.Racoon]: Images.sampleImage,
  [GuardianAnimal.Boar]: Images.sampleImage,
  [GuardianAnimal.Weasel]: Images.sampleImage,
  [GuardianAnimal.Rabbit]: Images.sampleImage,
  [GuardianAnimal.Doe]: Images.sampleImage,
  [GuardianAnimal.HummingBird]: Images.sampleImage,
  [GuardianAnimal.Bee]: Images.bee,
  [GuardianAnimal.Monkey]: Images.sampleImage,
  [GuardianAnimal.Owl]: Images.sampleImage
}

const hidden = css`
  transform: rotateY(180deg);
`