/** @jsxImportSource @emotion/react */
import GameView from '@gamepark/living-forest/GameView'
import { getPlayerName } from '@gamepark/living-forest/LivingForestOptions'
import { getAnimalsType } from '@gamepark/living-forest/material/GuardianAnimalDetails'
import ActionMove from '@gamepark/living-forest/moves/ActionMove'
import Phase from '@gamepark/living-forest/Phase'
import { getPlayer } from '@gamepark/living-forest/PlayerView'
import { usePlayerId } from '@gamepark/react-client'
import { Trans, useTranslation } from 'react-i18next'
import ValidateButton from './buttons/ValidateButton'
import VictoryTile from './material/VictoryTile';

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
      if (game.currentPlayer === player.spirit) {
        if (player.ongoingMove != null) {
          if (player.ongoingMove === ActionMove.AttractGuardianAnimal) {
            return <Trans defaults="You can choose Guardian Animals from the reserve. <0>Validate<0/>" components={[<ValidateButton spirit={player.spirit} />]} />
          }
          if (player.ongoingMove === ActionMove.MoveCircleOfSpirits) {
            if (player.bonus === ActionMove.ExtinguishFire) {
              return <Trans defaults="You can choose fires to extinguish. <0>Validate<0/>" components={[<ValidateButton spirit={player.spirit} />]} />
            }
            if (player.bonus === ActionMove.AttractGuardianAnimal) {
              return <Trans defaults="You can choose Guardian Animals from the reserve. <0>Validate<0/>" components={[<ValidateButton spirit={player.spirit} />]} />
            }
            if (player.bonus === ActionMove.PlantTree) {
              return <Trans defaults="You can take a tree and plant it in your forest." />
            }
            if (player.bonus === ActionMove.TakeVictoryTile) {
              return <Trans defaults="Select a victory tile. <0>Validate<0/>" components={[<VictoryTile />]} />
            }
          }
          if (player.ongoingMove === ActionMove.ExtinguishFire) {
            return <Trans defaults="You can choose fires to extinguish. <0>Validate<0/>" components={[<ValidateButton spirit={player.spirit} />]} />
          }
          if (player.ongoingMove === ActionMove.PlantTree) {
            return <Trans defaults="You can plant the tree in your forest." />
          }
        } else {
          if (getAnimalsType(player.line) > 2) {
            return <>{t('You have 1 action.')}</>
          } else {
            if (player.actionMoves.length === 1) return <>{t('You have 1 action left.')}</>
            return <>{t('You have 2 actions.')}</>
          }
        }
      } else {
        return <>{t('Another player is playing his turn.')}</>
      }
    }
  }

  return <>Loaded! Now what? Your player id is {getPlayerName(playerId, t)}</>
}