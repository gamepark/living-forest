/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import GuardianAnimal from '@gamepark/living-forest/material/GuardianAnimal';
import { DrawCardView } from '@gamepark/living-forest/moves/DrawCard';
import MoveType from '@gamepark/living-forest/moves/MoveType';
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature';
import { useAnimations } from '@gamepark/react-client';
import Card from '../material/Card';
import { helpLineLeft, helpLineTop, playDrawLeft } from '../styles';

type Props = {
    line: GuardianAnimal[]
    spirit: SpiritOfNature
}

export default function PlayerHelpLine({ line, spirit }: Props) {
    const animations = useAnimations<DrawCardView>(animation => animation.move.type === MoveType.DrawCard && animation.move.spirit === spirit)
    const cards = [...line, ...animations.map(animation => animation.move.card)]
    return (
        <>
            {cards.map((guardianAnimal, index) => {
                const animation = index >= line.length ? animations[index - line.length] : undefined
                return <Card key={getCardKey(guardianAnimal, index)} guardianAnimal={guardianAnimal}
                    css={[cardLinePosition(index), animation && drawCardCss(index, animation.duration)]} />
            }
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

function drawCardCss(index: number, duration: number) {
    const frames = keyframes`
    from{
        transform:translateX(${playDrawLeft - (helpLineLeft + index * 5.3)}em) rotateY(-180deg)
    }
    50%{
        transform:translateX(${(playDrawLeft - (helpLineLeft + index * 5.3)) / 2}em) translateZ(10em) rotateY(-90deg)
    }
    `
    return css`
        animation: ${frames} ${duration}s ease-in-out;
    `
}

function getCardKey(animal: GuardianAnimal, index: number) {
    return animal != GuardianAnimal.Varan ? animal : "Varan" + index
}
