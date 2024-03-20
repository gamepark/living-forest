/** @jsxImportSource @emotion/react */
import { css, Interpolation, Theme } from '@emotion/react'
import { HistoryEntry, HistoryEntryProps, Picture } from '@gamepark/react-game'


type PictureHistoryEntryProps = {
  picture: string
  pictureCss?: Interpolation<Theme>
} & HistoryEntryProps

export const PictureHistoryEntry = ({ picture, pictureCss, children, ...props }: PictureHistoryEntryProps) => {
  return <HistoryEntry {...props}>
    <div css={flexCss}>
      <div css={css`flex: 1;`}>
        {children}
      </div>
      <div css={actionPicture}>
        <Picture css={[pictureStyle, pictureCss]} src={picture}/>
      </div>
    </div>
  </HistoryEntry>
}

const flexCss = css`
  display: flex;
  align-items: center;
`

const actionPicture = css`
  padding-left: 0.3em;
  border-radius: 0.5em;
`

const pictureStyle = css`
  height: 2.2em;
  border-radius: 0.5em;
  border: 0.1em solid black
`