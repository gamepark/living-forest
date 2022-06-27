/** @jsxImportSource @emotion/react */
import { tellYouAreReadyMove } from '@gamepark/living-forest/moves/TellYouAreReady';
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature';
import { useTranslation } from 'react-i18next';
import Card from '../material/Card';
import { css } from '@emotion/react';
import { playDrawLeft, playDrawTop } from '../styles';;
import { usePlay } from '@gamepark/react-client';

type Props = {
  stack: number
  spirit: SpiritOfNature
  onClick: () => void
}

export default function PlayerDrawStack({ stack, spirit, onClick }: Props) {
  const { t } = useTranslation()
  const play = usePlay()
  const tell = () => { play(tellYouAreReadyMove(spirit), { delayed: true }) }
  return (
    <>
      <button css={[button]} onClick={tell} >{t("Stop")}</button>
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

const button = css`
  position: absolute;
  z-index: 100;
  left: 9em;
  top: 16em;
  font-size: 3.2em;
  font-weight: lighter;
  color: white;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 1em;
  padding: 0.3em 0.6em;
  transform:translateX(-50%);

  & svg {
    margin-right: 0.3em;
  }

  &:hover, &:focus {
    transform: translateX(-50%) translateY(1px) scale(1.05);
    cursor: pointer;
  }

  &:active {
    border-style: inset;
    transform: translateX(-50%) translateY(1px);
  }
`