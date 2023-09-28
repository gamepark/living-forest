/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { FC } from 'react'

type PlayerCounterProps = {
  image: string
  value: number
}

export const PlayerCounter: FC<PlayerCounterProps> = (props) => {
  const { image, value } = props
  return (
    <div css={holder}>
      <div css={resourceStyle(image)} />
      <div css={num}>{value}</div>
    </div>
  );
}

const holder =  css`
  display: flex;
  align-items: center;
  height: 3em;
  flex: 1;
`

const resourceStyle = (image: string) => css`
  flex: 1;
  background-image: url(${image});
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  filter: drop-shadow(0.1em 0.1em 0.2em gray);
`
const num = css`
  flex: 1.2;
  font-size: 2.7em;
  padding-left: 0.1em;
  padding-right: 0.1em;
  color: black;
`