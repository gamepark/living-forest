/** @jsxImportSource @emotion/react */
import GameView from '@gamepark/living-forest/GameView'
import {getPlayerName} from '@gamepark/living-forest/LivingForestOptions'
import { getAnimalsType } from '@gamepark/living-forest/material/GuardianAnimalDetails'
import Phase from '@gamepark/living-forest/Phase'
import { getPlayer } from '@gamepark/living-forest/PlayerView'
import {usePlayerId} from '@gamepark/react-client'
import {useTranslation} from 'react-i18next'

type Props = {
  loading: boolean
  game?: GameView
}

export default function HeaderText({loading, game}: Props) {
  const {t} = useTranslation()
  const playerId = usePlayerId()
  if (loading) return <>{t('Game loading...')}</>
  if(game != null){
    const player = getPlayer(game, playerId)
    if (game?.phase == Phase.GuardianAnimals) return <>{t('Form the Guardian Animal Help Line. Draw a card.')}</>
    if (game?.phase == Phase.Action) {
      if(getAnimalsType(player.line) > 2){
        return <>{t('You have 1 action.')}</>
      }else{
        return <>{t('You have 2 actions.')}</>
      }
    }
  }

  return <>Loaded! Now what? Your player id is {getPlayerName(playerId, t)}</>
}