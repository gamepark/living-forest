/** @jsxImportSource @emotion/react */
/* eslint-disable import/first */
import { css } from '@emotion/react';
import Phase from '@gamepark/living-forest/Phase';
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature';
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
  onClick: () => void
}

export default function PlayerDrawStack({ stack, spirit, fragment, phase, ready, displayed, onClick }: Props) {
  return (
    <>
      <TellYouAreReadyButton spirit={spirit} phase={phase} ready={ready} displayed={displayed} />
      <DiscardButton spirit={spirit} fragment={fragment} phase={phase} ready={ready} displayed={displayed} />
      {
        [...Array(stack)].map((_, index) => {
          return <Card key={index} css={cardPosition(index)} onClick={onClick} />
        })
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