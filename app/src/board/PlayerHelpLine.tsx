/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import GuardianAnimal from '@gamepark/living-forest/material/GuardianAnimal';
import Card from '../material/Card';
import { helpLineLeft, helpLineTop } from '../styles';

type Props = {
    line: GuardianAnimal[]
}

export default function PlayerHelpLine({ line }: Props) {
    return (
        <>
            {line.map((guardianAnimal, index) =>
                <Card key={guardianAnimal} css={cardLinePosition(index)} guardianAnimal={guardianAnimal} />
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
