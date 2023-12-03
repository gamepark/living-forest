/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import GuardianAnimal from '@gamepark/living-forest/material/GuardianAnimal'
import { GuardianAnimalDescriptions } from '@gamepark/living-forest/material/GuardianAnimalDescriptions'
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import Resource from '@gamepark/living-forest/material/Resource'
import { CustomMoveType } from '@gamepark/living-forest/rules/CustomMoveType'
import { MaterialHelpProps, PlayMoveButton, useLegalMove, useLegalMoves, usePlayerId } from '@gamepark/react-game'
import { isCustomMoveType, isEndPlayerTurn, isMoveItemType, MaterialMove } from '@gamepark/rules-api'
import { Trans, useTranslation } from 'react-i18next'
import Images from '../../images/Images'
import CardType from '@gamepark/living-forest/material/CardType'

export const GuardianAnimalCardRules = ({ item, itemIndex, closeDialog }: MaterialHelpProps) => {
  const { t } = useTranslation()
  const legalMoves = useLegalMoves<MaterialMove>()
  const shuffleAndDraw = legalMoves.find(isCustomMoveType(CustomMoveType.ShuffleAndDraw))
  const pass = legalMoves.find(isEndPlayerTurn)
  const draw = legalMoves.find(isMoveItemType(MaterialType.GuardianAnimalCard))
  const attract = useLegalMove((move: MaterialMove) =>
    isMoveItemType(MaterialType.GuardianAnimalCard, itemIndex)(move) && item.location?.type === LocationType.ReserveRow
  )
  const player = usePlayerId()
  const activePlayer = item.location?.player === player
  const deck = item.location?.type === LocationType.PlayerDeckStack
  const discard = item.location?.type === LocationType.PlayerDiscardStack
  const reserveRow = item.location?.type === LocationType.ReserveRow
  const helpline = item.location?.type === LocationType.HelpLine

  //verso cards
  if (item.id === undefined) {

    //deck stack cards
    if (deck) {
      return <>
        <h2>{t('rules.guardian-animal.title')}</h2>
        {activePlayer && <p>{t('rules.deck-stack')}</p>}
        {!activePlayer && <p>{t('rules.deck-stack-opponent')}</p>}
        {draw && activePlayer && <hr />}
        {draw && !pass && activePlayer && <Trans defaults="rules.draw-card">
          <PlayMoveButton move={draw} />
        </Trans>}
        {draw && pass && activePlayer && <Trans defaults="rules.draw-pass">
          <PlayMoveButton move={draw} />
          <PlayMoveButton move={pass} onPlay={closeDialog} />
        </Trans>}
      </>
    } else {
      //reserve stack cards
      return <>
        <h2>{t('rules.guardian-animal.title')}</h2>
      </>
    }
  }
  //varan card
  if (item.id === GuardianAnimal.Varan) {
    return <>
      <h2>{t('rules.varan.title')}</h2>
      <p>
        <Trans defaults="rules.varan.description">
          <span css={resourceStyle(ResourceImage[2])} />
        </Trans>
      </p>
      <p>{t('rules.varan.destroy')}</p>
    </>
  }
  //discard stack cards
  if (discard) {
    return <>
      <h2>{t('rules.guardian-animal.title')}</h2>
      {activePlayer && <p>{t('rules.discard-stack')}</p>}
      {!activePlayer && <p>{t('rules.discard-stack-opponent')}</p>}
      {shuffleAndDraw && activePlayer && <hr />}
      {shuffleAndDraw && activePlayer &&
        <Trans defaults="rules.shuffle-draw">
          <PlayMoveButton move={shuffleAndDraw} onPlay={closeDialog} />
        </Trans>}
    </>
  }
  //reserve row
  if (reserveRow) {
    return <>
      <h2>{t('rules.guardian-animal.title')}</h2>
      <p>{t('rules.guardian-animal.description')}</p>
      <p css={alignIconText}>
        <Trans defaults="rules.guardian-animal.get">
          <span css={resourceStyle(ResourceImage[1])} />
        </Trans>
      </p>
      <hr />
      <p css={alignIcon}>{t('rules.cost')} :
        <span>{GuardianAnimalDescriptions[item.id].cost}
          <span css={resourceStyle(ResourceImage[1])} /></span>
      </p>
      <p css={alignIcon}>{t('rules.resources')} :
        {Object.keys(GuardianAnimalDescriptions[item.id].resources).map((element, index) => {
          return <span key={index}>{GuardianAnimalDescriptions[item.id].resources[element]}
            <span css={resourceStyle(ResourceImage[element])} />
          </span>
        })}
      </p>
      {attract && <hr />}
      {attract && <Trans defaults="rules.attract">
        <PlayMoveButton move={attract} onPlay={closeDialog} />
      </Trans>}
    </>
  }

  //help line
  if (helpline) {
    return <>
      <h2>{t('rules.guardian-animal.title')}</h2>
      {activePlayer && <p>{t('rules.help-line')}</p>}
      {!activePlayer && <p>{t('rules.help-line-opponent')}</p>}
      <p>{t('rules.guardian-animal.description')}</p>
      <p css={alignIconText}>
        <Trans defaults="rules.guardian-animal.get">
          <span css={resourceStyle(ResourceImage[1])} />
        </Trans>
      </p>
      <hr />
      <p css={alignIcon}>{t('rules.cost')} :
        <span>{GuardianAnimalDescriptions[item.id].cost} <span css={resourceStyle(ResourceImage[1])} /></span>
      </p>
      <p css={alignIcon}>{t('rules.resources')} :
        {Object.keys(GuardianAnimalDescriptions[item.id].resources).map((element, index) => {
          return <span key={index} >{GuardianAnimalDescriptions[item.id].resources[element]}
            <span css={resourceStyle(ResourceImage[element])} />
          </span>
        })}
      </p>
    </>

  }
  return <></>
}

export const ResourceImage: Record<Resource, string> = {
  [Resource.Sun]: Images.sun,
  [Resource.Drop]: Images.drop,
  [Resource.Seed]: Images.seed,
  [Resource.Wind]: Images.wind,
  [Resource.SacredFlower]: Images.sacredFlower,
}

export const TypeImage: Record<CardType, string> = {
  [CardType.Gregarious]: Images.gregarious,
  [CardType.Solitary]: Images.gregarious,
}

export const resourceStyle = (image: string) => css`
  flex: 1;
  align-self: center;
  background-image: url(${image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 1.2em;
  height: 1.2em;
  filter: drop-shadow(0.1em 0.1em 0.2em gray);
  display:inline-block;
`

export const alignIcon = css`
display:flex;
gap:4px;
align-items:start;
justify-content:start;

span{
      display:flex;
      align-items:center;
      justify-content:center;
      gap:2px;
    }
`

export const alignIconText = css`
  > * {
    vertical-align: middle;
  }

  picture, img {
    vertical-align: middle;
    height: 1.5em;
    margin-right: 0.1em;
  }
`
