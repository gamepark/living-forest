/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import GuardianAnimal from '@gamepark/living-forest/material/GuardianAnimal'
import { HTMLAttributes } from 'react'
import { cardHeight, cardWith } from '../styles'
import Images from '../images/Images'

type Props = {
  guardianAnimal?: GuardianAnimal
} & HTMLAttributes<HTMLDivElement>

export default function Card({ guardianAnimal, ...props }: Props) {
  return (
    <div css={[style, guardianAnimal ? front(guardianAnimal) : hidden]} {...props} />
  )
}

const style = css`
  position: absolute;
  width:${cardWith}em;
  height:${cardHeight}em;
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
    box-shadow: 0 0 0.1em black, 0 0 0.1em black;
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
  [GuardianAnimal.Bear]: Images.bear1,
  [GuardianAnimal.Beetle]: Images.beetle1,
  [GuardianAnimal.Lynx]: Images.lynx1,
  [GuardianAnimal.Fox]: Images.fox1,
  [GuardianAnimal.GoldFish]: Images.goldfish1,
  [GuardianAnimal.Tanuki]: Images.tanuki1,
  [GuardianAnimal.Boar]: Images.boar1,
  [GuardianAnimal.Weasel]: Images.weasel1,
  [GuardianAnimal.Rabbit]: Images.rabbit1,
  [GuardianAnimal.Doe]: Images.doe1,
  [GuardianAnimal.HummingBird]: Images.hummingbird1,
  [GuardianAnimal.Bee]: Images.bee1,
  [GuardianAnimal.Monkey]: Images.monkey1,
  [GuardianAnimal.Owl]: Images.owl1,

  [GuardianAnimal.Hedgehog]: Images.hedgehog,
  [GuardianAnimal.Caterpillar]: Images.caterpillar,
  [GuardianAnimal.Flamingo]: Images.flamingo,
  [GuardianAnimal.Ram]: Images.ram,
  [GuardianAnimal.Wolf]: Images.wolf,
  [GuardianAnimal.Lemur]: Images.lemur,
  [GuardianAnimal.Squirrel]: Images.squirrel,
  [GuardianAnimal.Turtle]: Images.turtle,
  [GuardianAnimal.Coati]: Images.coati,
  [GuardianAnimal.Racoon]: Images.racoon,
  [GuardianAnimal.Beaver]: Images.beaver,
  [GuardianAnimal.Raven]: Images.raven,
  [GuardianAnimal.Bat]: Images.bat,
  [GuardianAnimal.Parrot]: Images.parrot,
  [GuardianAnimal.Meerkat]: Images.meerkat,
  [GuardianAnimal.Horse]: Images.horse,
  [GuardianAnimal.Axolotls]: Images.axolotls,
  [GuardianAnimal.Chimpanzee]: Images.chimpanzee,
  [GuardianAnimal.Toucan]: Images.toucan,
  [GuardianAnimal.Butterfly]: Images.butterfly,
  [GuardianAnimal.Spider]: Images.spider,
  [GuardianAnimal.Hippopotamus]: Images.hippopotamus,
  [GuardianAnimal.EagleOwl]: Images.eagleowl,
  [GuardianAnimal.Woodpecker]: Images.woodpecker,
  [GuardianAnimal.Badger]: Images.badger,
  [GuardianAnimal.Rooster]: Images.rooster,
  [GuardianAnimal.Rhinoceros]: Images.rhinoceros,
  [GuardianAnimal.Goat]: Images.goat,
  [GuardianAnimal.Bull]: Images.bull,
  [GuardianAnimal.Lizard]: Images.lizard,
  [GuardianAnimal.Frog]: Images.frog,
  [GuardianAnimal.Marmot]: Images.marmot,
  [GuardianAnimal.Platypus]: Images.platypus,
  [GuardianAnimal.Crane]: Images.crane,
  [GuardianAnimal.Sloth]: Images.sloth,
  [GuardianAnimal.Koala]: Images.koala,
  [GuardianAnimal.Leopard]: Images.leopard,
  [GuardianAnimal.Eagle]: Images.eagle,
  [GuardianAnimal.Snake]: Images.snake,
  [GuardianAnimal.Cricket]: Images.cricket,
  [GuardianAnimal.Panther]: Images.panther,
  [GuardianAnimal.Gorilla]: Images.gorilla,
  [GuardianAnimal.Bison]: Images.bison,
  [GuardianAnimal.Chameleon]: Images.chameleon,
  [GuardianAnimal.Crocodile]: Images.crocodile,
  [GuardianAnimal.Elephant]: Images.elephant,
  [GuardianAnimal.Dolphin]: Images.dolphin,
  [GuardianAnimal.Dog]: Images.dog,
  [GuardianAnimal.Panda]: Images.panda,
  [GuardianAnimal.Stag]: Images.stag,
  [GuardianAnimal.Tapir]: Images.tapir,
  [GuardianAnimal.Varan]: Images.varan

}

const hidden = css`
  transform: rotateY(180deg);
`