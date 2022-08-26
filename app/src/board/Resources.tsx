/** @jsxImportSource @emotion/react */
import GuardianAnimal from '@gamepark/living-forest/material/GuardianAnimal';
import ProtectiveTree from '@gamepark/living-forest/material/ProtectiveTree';
import Resource from '@gamepark/living-forest/material/Resource';
import { getResourcesCount } from '@gamepark/living-forest/material/Victory';
import VictoryTile from '@gamepark/living-forest/material/VictoryTile';
import ActionMove from '@gamepark/living-forest/moves/ActionMove';
import ResourceElement from './Resource';

type Props = {
    line: GuardianAnimal[]
    forest: (ProtectiveTree | number | null)[][]
    victoryTile: VictoryTile[]
    bonus: ActionMove | null
}

export default function Resources({ line, victoryTile, bonus, forest }: Props) {
    const resources = Resource
    const res = Object.values(resources).slice(5, 10)

    return (
        <>
            {res.map((resource, index) => {
                return resource < 5 && <ResourceElement key={resource} resource={index + 1} number={getResourcesCount(victoryTile, line, bonus, forest, index + 1)} />
            })}
        </>
    );
}