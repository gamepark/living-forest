/** @jsxImportSource @emotion/react */
/* eslint-disable import/first */
import { css, keyframes } from '@emotion/react';
import { drawCardMove } from '@gamepark/living-forest/moves/DrawCard';
import Phase from '@gamepark/living-forest/Phase';
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature';
import { useAnimation, usePlay, usePlayerId } from '@gamepark/react-client';
import ShuffleButton from '../buttons/ShuffleButton';
import DiscardButton from '../buttons/DiscardButton';
import TellYouAreReadyButton from '../buttons/TellYouAreReadyButton';
import Card from '../material/Card';
import { discardLeft, discardTop, playDrawLeft, playDrawTop } from '../styles';
import ShuffleDiscard from '@gamepark/living-forest/moves/ShuffleDiscard';
import MoveType from '@gamepark/living-forest/moves/MoveType';

type Props = {
  stack: number
  spirit: SpiritOfNature
  fragment: number
  phase: Phase
  ready: boolean
  displayed?: SpiritOfNature
  lineNumber: number
}

export default function PlayerDrawStack({ stack, spirit, fragment, phase, ready, displayed, lineNumber }: Props) {
  const playerdId = usePlayerId()
  const play = usePlay()
  const draw = () => { displayed === playerdId && phase === Phase.GuardianAnimals && !ready && play(drawCardMove(playerdId), { delayed: true }) }
  const animation = useAnimation<ShuffleDiscard>(animation => animation.move.type === MoveType.ShuffleDiscard)

  return (
    <>
      <TellYouAreReadyButton spirit={spirit} phase={phase} ready={ready} displayed={displayed} lineNumber={lineNumber} />
      <DiscardButton spirit={spirit} fragment={fragment} phase={phase} ready={ready} displayed={displayed} lineNumber={lineNumber} />
      {
        (stack > 0) ? [...Array(stack)].map((_, index) => { return <Card key={index} css={[cardPosition(index), animation && shuffleDiscardAnimation(index, animation.duration)]} onClick={draw} /> }) : <ShuffleButton spirit={spirit} ready={ready} />
      }
    </>
  );
}

function cardPosition(index: number) {
  return css`
    top:${playDrawTop - index * 0.1}em;
    left:${playDrawLeft - index * 0.1}em;
    `
}

function shuffleDiscardAnimation(index: number, duration: number) {
  const frames = keyframes`
  from{
      transform:translateX(${discardTop + index * 0.1}em) translateY(${discardLeft + index * 0.1}em) rotateY(-180deg)
  }
  50%{
      transform:translateX(${(discardTop + index * 0.1) / 2}em) translateY(${(discardLeft + index * 0.1) / 2}em) rotateY(-90deg)
  }
  `
  return css`
      animation: ${frames} ${duration}s ease-in-out;
  `
}