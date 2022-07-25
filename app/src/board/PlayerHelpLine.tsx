/** @jsxImportSource @emotion/react */
import Card from '../material/Card';
import { css } from '@emotion/react';
import { helpLineLeft, helpLineTop } from '../styles';
import GuardianAnimal from '@gamepark/living-forest/material/GuardianAnimal';
// import { getAnimalsType } from '../../../rules/src/material/GuardianAnimalDetails';


type Props = {
    line: GuardianAnimal[]
}

export default function PlayerHelpLine({ line }: Props) {

    return (
        <>
            {line.map((guardianAnimal, index) =>
                <Card key={index} css={cardLinePosition(index)} guardianAnimal={guardianAnimal} />
            )}
        </>
    );
}

function cardLinePosition(index: number) {
    return css`
    top:${helpLineTop}em;
    left:${helpLineLeft + index * 5.3}em;
    `
}
