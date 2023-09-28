/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Images from '../images/Images'
import { Player } from '@gamepark/react-client'
import { PlayerState } from '@gamepark/living-forest/refacto/rules/helper/PlayerState'
import { FC } from 'react'
import { VictoryTileType, victoryTileTypes } from '@gamepark/living-forest/material/VictoryTiles'
import { PlayerCounter } from './PlayerCounter'


type PlayerVictoriesProps = {
  player: Player
  state: PlayerState
}

export const PlayerVictories: FC<PlayerVictoriesProps> = (props) => {
  const { state } = props
  return (
    <>
      <div css={victoriesStyle}>
        {victoryTileTypes.map((v) => <PlayerCounter key={v} image={VictoryImage[v]} value={state.getPointForType(v)} />)}
        <PlayerCounter image={Images.gregarious} value={state.solidarityGregariousDifference} />
      </div>
    </>
  )
}


const victoriesStyle = css`
  display: flex;
  flex-direction: row;
  width: calc(100% - 2em);
  position: absolute;
  top: 6.5em;
  justify-content: space-between;
  margin: 1em;
  padding-bottom: 0.8em;
  border-bottom: 0.1em solid gray;
`

const VictoryImage: Record<VictoryTileType, string> = {
  [VictoryTileType.Fire]: Images.firePanel,
  [VictoryTileType.Flower]: Images.sacredFlower,
  [VictoryTileType.Tree]: Images.seed,
}
