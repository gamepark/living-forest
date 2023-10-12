/** @jsxImportSource @emotion/react */
import { MaterialRulesProps, PlayMoveButton, useLegalMove, useLegalMoves, usePlayerId } from '@gamepark/react-game'
import Images from '../../images/Images'
import { GuardianAnimalDescriptions } from '@gamepark/living-forest/material/GuardianAnimalDescriptions';
import Resource from '@gamepark/living-forest/material/Resource'
import { css } from '@emotion/react'
import { Trans, useTranslation } from 'react-i18next'
import { MaterialMove, isCustomMoveType, isEndPlayerTurn, isMoveItemType } from '@gamepark/rules-api';
import { MaterialType } from '@gamepark/living-forest/material/MaterialType';
import { CustomMoveType } from '@gamepark/living-forest/rules/CustomMoveType';
import { LocationType } from '@gamepark/living-forest/material/LocationType';
import GuardianAnimal from '@gamepark/living-forest/material/GuardianAnimal';

export const GuardianAnimalCardRules = ({ item, itemIndex, closeDialog }: MaterialRulesProps) => {
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
  if (item.id == undefined) {

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
  if (item.id == GuardianAnimal.Varan) {
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
      <p>
        <Trans defaults="rules.guardian-animal.get">
          <span css={resourceStyle(ResourceImage[1])} />
        </Trans>
      </p>
      <hr />
      <p>{t('rules.cost')} : {GuardianAnimalDescriptions[item.id].cost} <div css={resourceStyle(ResourceImage[1])} /></p>
      <div>{t('rules.resources')} :
        {Object.keys(GuardianAnimalDescriptions[item.id].resources).map((element, index) => {
          return <>{GuardianAnimalDescriptions[item.id].resources[element]}
            <span key={index} css={resourceStyle(ResourceImage[element])} />
          </>
        })}
      </div>
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
      <p>
        <Trans defaults="rules.guardian-animal.get">
          <span css={resourceStyle(ResourceImage[1])} />
        </Trans>
      </p>
      <hr />
      <p>{t('rules.cost')} : {GuardianAnimalDescriptions[item.id].cost} <div css={resourceStyle(ResourceImage[1])} /></p>
      <div>{t('rules.resources')} :
        {Object.keys(GuardianAnimalDescriptions[item.id].resources).map((element, index) => {
          return <>{GuardianAnimalDescriptions[item.id].resources[element]}
            <span key={index} css={resourceStyle(ResourceImage[element])} />
          </>
        })}
      </div>
    </>

  }
  return <></>
}




const ResourceImage: Record<Resource, string> = {
  [Resource.Sun]: Images.sun,
  [Resource.Drop]: Images.drop,
  [Resource.Seed]: Images.seed,
  [Resource.Wind]: Images.wind,
  [Resource.SacredFlower]: Images.sacredFlower,
}

const resourceStyle = (image: string) => css`
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
