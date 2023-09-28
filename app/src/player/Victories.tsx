import { FC } from 'react'

export const Victories: FC<any> = () => null
/*
/!** @jsxImportSource @emotion/react *!/
import { css } from '@emotion/react'
import GuardianAnimal from '@gamepark/living-forest/material/GuardianAnimal'
import ProtectiveTree from '@gamepark/living-forest/material/ProtectiveTree'
import Images from '../images/Images'
import { resourceheight, resourceWidth } from '../styles'
import VictoryTiles from '@gamepark/living-forest/material/VictoryTiles'

type Props = {
  victoryTiles: VictoryTile[]
  line: GuardianAnimal[]
  forest: (ProtectiveTree | number | null)[][]
  extinguishedFires: number
}

export default function Victories({ victoryTiles, line, forest, extinguishedFires }: Props) {
  const type = getAnimalsType(line)

  return (
    <>
      {Object.entries(VictoryTiles).splice(3, 3).map((_, index) => {

        const number = getvictoryCount(victoryTiles, line, forest, index + 1, extinguishedFires)
        return <div key={index} css={victoryStyle(index + 1)}><div css={num}>{number}</div></div>
      })}
      {type > 0 ? <div css={element}><div css={num}>{type}</div></div> : <div></div>}
    </>
  );
}
const victoryStyle = (victory: number) => css`
position:flex;
width:${resourceWidth}em;
height:${resourceheight}em;
background-image: url(${VictoryImage[victory]});
background-size: cover;
filter: drop-shadow(0 0 0.9em white);
`
const VictoryImage: { [key in Victory]: string } = {
  [Victory.Fire]: Images.fire,
  [Victory.SacredFlower]: Images.sacredFlower,
  [Victory.Tree]: Images.seed,
}

const num = css`
position:absolute;
top:0.2em;
left:1.15em;
color:black;
font-size:3em;
`
const element = css`
position:flex;
width:${resourceWidth}em;
height:${resourceheight}em;
background-image: url(${Images.gregarious});
background-size: cover;
filter: drop-shadow(0 0 0.9em white);
`*/
