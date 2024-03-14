/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { LivingForestRules } from '@gamepark/living-forest/LivingForestRules'
import { usePlayerId, usePlayers, useRules } from '@gamepark/react-game'
import orderBy from 'lodash/orderBy'
import { FC, useMemo } from 'react'
import { getBoardIndex } from '../utils/PositionOnTable'
import { LivingForestPlayerPanel } from './LivingForestPlayerPanel'

export const PlayerPanels: FC = () => {
  const players = usePlayers()
  const playerId = usePlayerId()
  const rules = useRules<LivingForestRules>()!
  const orderedPlayers = useMemo(() => orderBy(players, (p) => getBoardIndex(p.id, rules, playerId)), [])
  return (
    <>
      {orderedPlayers.map((player, index) =>
        <LivingForestPlayerPanel key={player.id} player={player} css={panelPosition(index)} />
      )}
    </>
  )
}

const panelPosition = (index: number) => css`
  position: absolute;
  cursor: pointer;
  right: 1em;
  top: ${8.2 + (index * 18.5)}em;
  width: 28em;
  height: 17.5em;
`
