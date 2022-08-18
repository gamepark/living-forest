/** @jsxImportSource @emotion/react */
import GameView from '@gamepark/living-forest/GameView'
import { getPlayerName } from '@gamepark/living-forest/LivingForestOptions'
import { getAnimalsType } from '@gamepark/living-forest/material/GuardianAnimalDetails'
import ActionMove from '@gamepark/living-forest/moves/ActionMove'
import Phase from '@gamepark/living-forest/Phase'
import { getPlayer } from '@gamepark/living-forest/PlayerView'
import { usePlayerId } from '@gamepark/react-client'
import { Trans, useTranslation } from 'react-i18next'
import ValidateButton from './board/ValidateButton'
import VictoryTiles from './board/VictoryTiles';

type Props = {
  loading: boolean
  game?: GameView
}

export default function HeaderText({ loading, game }: Props) {
  const { t } = useTranslation()
  const playerId = usePlayerId()

  if (loading) return <>{t('Game loading...')}</>
  if (game != null) {
    const player = getPlayer(game, playerId)
    if (game?.phase === Phase.GuardianAnimals) return <>{t('Form the Guardian Animal Help Line. Draw a card.')}</>
    if (game?.phase === Phase.Action) {
      if (player.ongoingMove != null) {
        if (player.ongoingMove === ActionMove.AttractGuardianAnimal) {
          return <Trans defaults="You can choose Guardian Animals from the reserve. <0>Validate<0/>" components={[<ValidateButton />]} />
        }
        if (player.ongoingMove === ActionMove.MoveCircleOfSpirits) {
          if (player.bonus === ActionMove.ExtinguishFire) {

          }
          if (player.bonus === ActionMove.AttractGuardianAnimal) {
            return <Trans defaults="You can choose Guardian Animals from the reserve. <0>Validate<0/>" components={[<ValidateButton />]} />
          }
          if (player.bonus === ActionMove.PlantTree) {

          }
          if (player.bonus === ActionMove.TakeVictoryTile) {
            return <Trans defaults="Select a victory tile. <0>Validate<0/>" components={[<VictoryTiles />]} />
          }
        }
        if (player.ongoingMove === ActionMove.ExtinguishFire) {
          return <Trans defaults="You can choose fires to extinguish. <0>Validate<0/>" components={[<ValidateButton />]} />
        }
      } else {
        if (getAnimalsType(player.line) > 2) {
          return <>{t('You have 1 action.')}</>
        } else {
          return <>{t('You have 2 actions.')}</>
        }
      }
    }
  }

  return <>Loaded! Now what? Your player id is {getPlayerName(playerId, t)}</>
}