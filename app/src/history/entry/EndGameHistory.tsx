/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { HistoryEntry } from '@gamepark/react-game'
import { FC } from 'react'
import { GameOverHeader } from '../../header/GameOverHeader'

export const EndGameHistory: FC = () => {
  return (
    <>
      <HistoryEntry borderBottom css={winnerStyle}>
        <GameOverHeader/>
      </HistoryEntry>
      <HistoryEntry borderBottom css={endOfGameStyle}></HistoryEntry>
    </>
  )
}

const winnerStyle = css`
  color: green;
  text-align: center;
  font-weight: bold;
  font-style: italic;
`

const endOfGameStyle = css`
  color: grey;
  text-align: center;
  font-style: italic
`