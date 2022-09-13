/** @jsxImportSource @emotion/react */
/* eslint-disable import/first */
import { css } from '@emotion/react';
import { drawCardMove } from '@gamepark/living-forest/moves/DrawCard';
import Phase from '@gamepark/living-forest/Phase';
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature';
import { usePlay, usePlayerId } from '@gamepark/react-client';
import ShuffleButton from '../buttons/ShuffleButton';
import DiscardButton from '../buttons/DiscardButton';
import TellYouAreReadyButton from '../buttons/TellYouAreReadyButton';
import Card from '../material/Card';
import { playDrawLeft, playDrawTop } from '../styles';

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

  return (
    <>
      <TellYouAreReadyButton spirit={spirit} phase={phase} ready={ready} displayed={displayed} lineNumber={lineNumber} />
      <DiscardButton spirit={spirit} fragment={fragment} phase={phase} ready={ready} displayed={displayed} lineNumber={lineNumber} />
      {
        (stack > 0) ? [...Array(stack)].map((_, index) => { return <Card key={index} css={cardPosition(index)} onClick={draw} /> }) : <ShuffleButton spirit={spirit} ready={ready} />
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