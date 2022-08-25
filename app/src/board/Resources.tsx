/** @jsxImportSource @emotion/react */
import GuardianAnimal from '@gamepark/living-forest/material/GuardianAnimal';
import Resource from '@gamepark/living-forest/material/Resource';
import { css } from '@emotion/react';
import { getAnimalsType } from '@gamepark/living-forest/material/GuardianAnimalDetails';
import Images from '../images/Images';
import { resourceLeft, resourceTop } from '../styles';
import ProtectiveTree from '@gamepark/living-forest/material/ProtectiveTree';
import ResourceElement from './Resource';
import VictoryTile from '@gamepark/living-forest/material/VictoryTile';
import ActionMove from '@gamepark/living-forest/moves/ActionMove';
import { getResourcesCount } from '@gamepark/living-forest/material/Victory';



type Props = {
    line: GuardianAnimal[]
    forest: (ProtectiveTree | number | null)[][]
    victoryTile: VictoryTile[]
    bonus: ActionMove | null
}

export default function Resources({ line, victoryTile, bonus, forest }: Props) {
    const resources = Resource
    const res = Object.values(resources).slice(5, 10)
    const type = getAnimalsType(line)

    return (
        <>
            {res.map((resource, index) => {
                return <ResourceElement key={resource} resource={index + 1} number={getResourcesCount(victoryTile, line, bonus, forest, index + 1)} />
            })}
            {<div css={element}>
                <div css={num}>{(type !== 0) ? type : ""}</div>
            </div>
            }
        </>
    );
}

const element = css`
position:absolute;
width:2.5em;
height:2.5em;
top:${resourceTop}em;
left:${resourceLeft + 6 * 4.2}em;
background-image: url(${Images.gregarious});
background-size: cover;
filter: drop-shadow(0 0 0.9em black);
`
const num = css`
position:absolute;
top:0.2em;
left:1.3em;
color:black;
font-size:2em;
`