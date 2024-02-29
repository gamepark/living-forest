/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { getPlayerName } from '@gamepark/living-forest/LivingForestOptions'
import Resource, { resources } from '@gamepark/living-forest/material/Resource'
import { VictoryTileType, victoryTileTypes } from '@gamepark/living-forest/material/VictoryTiles'
import { PlayerState } from '@gamepark/living-forest/rules/helper/PlayerState'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { Avatar, RulesDialog, usePlayerName } from '@gamepark/react-game'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import Images from '../../images/Images'
import { ResourceImage } from '../../material/description/help/GuardianAnimalCardHelp'
import { PlayerDialogIndicator } from './PlayerDialogIndicator'


type PlayerDialogProps = {
  player: SpiritOfNature
  close: () => void
  open: boolean
  state: PlayerState
}

export const PlayerDialog: FC<PlayerDialogProps> = ({ open, close, player, state }) => {
  const { t } = useTranslation()
  const name = usePlayerName(player) ?? getPlayerName(player, t)

  return (
    <RulesDialog open={open} close={close}>
      <div css={container}>
        <div css={header}>
          <Avatar playerId={player} css={avatar} />
          <h2>{name}</h2>
        </div>
        {victoryTileTypes.map((v) => {
          return <PlayerDialogIndicator
            key={v}
            width={2.5}
            ratio={0.8}
            image={VictoryImage[v]}
            value={t('player.dialog.score.victory.' + v + '.value', { player: name, score: state.getPointForType(v) })}
            description={t('player.dialog.score.victory.' + v + '.board-score')}
          />
        })}
        <PlayerDialogIndicator
          width={2.5}
          ratio={1}
          image={Images.solitary}
          value={t('player.dialog.score.gregorious.value', { player: name, score: state.solidarityGregariousDifference })}
          description={t('player.dialog.score.gregarious.board-score')}
        />
        {resources.filter((r) => r !== Resource.SacredFlower).map((r) => (
          <PlayerDialogIndicator
            key={r}
            width={3}
            ratio={1}
            image={ResourceImage[r]}
            value={t('player.dialog.score.resource.' + r + '.value', { player: name, score: state.getResources(r) })}
            description={t('player.dialog.score.resource.' + r + '.board-score')}
          />
        ))}


      </div>
    </RulesDialog>)
}

const container = css`
  padding: 3em;
  max-width: 90vw;
  max-height: 90vh;
`

const header = css`
  display: flex;
  margin: 0 0.7em 0 0.7em;
  padding-bottom: 1em;
  font-size: 3em;
  border-bottom: 0.1em solid lightgray;

  > h2 {
    margin: 0 0.7em;
    text-align: center;
    line-height: 1.3;
  }
`

const avatar = css`
  position: relative;
  border-radius: 100%;
  height: 3em;
  width: 3em;

  > svg {
    width: 112.3%;
    height: 117%;
  }
`
const VictoryImage: Record<VictoryTileType, string> = {
  [VictoryTileType.Fire]: Images.firePanel,
  [VictoryTileType.Flower]: Images.sacredFlower,
  [VictoryTileType.Tree]: Images.seed
}
