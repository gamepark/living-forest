/** @jsxImportSource @emotion/react */
import { PlayerState } from '@gamepark/living-forest/refacto/rules/helper/PlayerState'
import { Player } from '@gamepark/react-client'
import { FC } from 'react'
import Resource, { resources } from '@gamepark/living-forest/material/Resource'
import { PlayerResource } from './PlayerResource'
import { css } from '@emotion/react'

export type PlayerResourcesProps = {
  player: Player
  state: PlayerState
}

export const PlayerResources: FC<PlayerResourcesProps> = (props) => {
  const { state } = props;

  return (
    <div css={resourcesStyle}>
      { resources.filter((r) => r !== Resource.SacredFlower).map((r) => (
        <PlayerResource key={r} type={r} value={state.getResources(r)} />
      ))}
    </div>
  )

}


const resourcesStyle = css`
  display: flex;
  flex-direction: row;
  width: calc(100% - 2em);
  position: absolute;
  top: 11.2em;
  justify-content: space-between;
  margin: 1em; 
`
