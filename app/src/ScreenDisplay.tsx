/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'
import {getPlayerName} from '@gamepark/living-forest/LivingForestOptions'
import {useTranslation} from 'react-i18next'
import GameLocalView from './GameLocalView'

type Props = {
  game: GameLocalView
}

export default function ScreenDisplay({game}: Props) {
  const {t} = useTranslation()
  if (game.displayedPlayer) {
    return <div css={style}>Il faut créer le composant qui affiche le joueur {getPlayerName(game.displayedPlayer, t)}</div>
  } else {
    return <div css={style}>Composant pour afficher la forêt</div>
  }
}

const style = css`
  font-size: 4em;
  top: 2em;
  position: absolute;`
