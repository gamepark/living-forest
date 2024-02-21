/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { LivingForestRules } from '@gamepark/living-forest/LivingForestRules'
import CardType from '@gamepark/living-forest/material/CardType'
import GuardianAnimal from '@gamepark/living-forest/material/GuardianAnimal'
import { GuardianAnimalDescriptions } from '@gamepark/living-forest/material/GuardianAnimalDescriptions'
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import Resource from '@gamepark/living-forest/material/Resource'
import { CustomMoveType } from '@gamepark/living-forest/rules/CustomMoveType'
import { MaterialHelpProps, PlayMoveButton, useLegalMove, useLegalMoves, usePlayerId, usePlayerName, useRules } from '@gamepark/react-game'
import { isCustomMoveType, isEndPlayerTurn, isMoveItemType, MaterialMove } from '@gamepark/rules-api'
import { FC } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import Images from '../../../images/Images'
import { getAnimalTranslation } from '../../../utils/AnimalName'

export const GuardianAnimalCardHelp = ({ item, itemIndex, closeDialog }: MaterialHelpProps) => {
  const { t } = useTranslation()
  const player = usePlayerId()
  const rules = useRules<LivingForestRules>()!
  const legalMoves = useLegalMoves<MaterialMove>()
  const shuffleAndDraw = legalMoves.find(isCustomMoveType(CustomMoveType.ShuffleAndDraw))
  const pass = legalMoves.find(isEndPlayerTurn)
  const draw = legalMoves.find(isMoveItemType(MaterialType.GuardianAnimalCard))
  const attract = useLegalMove((move: MaterialMove) =>
    isMoveItemType(MaterialType.GuardianAnimalCard, itemIndex)(move) && item.location?.type === LocationType.ReserveRow
  )
  const activePlayer = item.location?.player === player
  const deck = item.location?.type === LocationType.PlayerDeckStack
  const discard = item.location?.type === LocationType.PlayerDiscardStack
  const helpline = item.location?.type === LocationType.HelpLine
  const playerName = usePlayerName(item.location?.player)


  //verso cards
  if (item.id === undefined) {

    //deck stack cards
    if (deck) {
      return <>
        <h2>{player === item.location!.player ? t('help.deck.title.mine') : t('help.deck.title', { player })}</h2>
        {activePlayer && <p css={italic}>{t('rules.deck-stack')}</p>}
        {!activePlayer && <p css={italic}>{t('rules.deck-stack-opponent', { player: playerName })}</p>}
        {draw && activePlayer && <hr/>}
        {draw && !pass && activePlayer && <Trans defaults="rules.draw-card">
          <PlayMoveButton move={draw}/>
        </Trans>}
        {draw && pass && activePlayer && <Trans defaults="rules.draw-pass">
          <PlayMoveButton move={draw}/>
          <PlayMoveButton move={pass} onPlay={closeDialog}/>
        </Trans>}
        <hr/>
        <div css={italic}>
          <Trans defaults={player === item.location!.player ? 'help.deck.content.mine' : 'help.deck.content'} values={{
            number: rules.material(MaterialType.GuardianAnimalCard).location(LocationType.PlayerDeckStack).player(item.location?.player).length,
            player: playerName
          }}>
            <strong/>
          </Trans>
        </div>
      </>
    } else {
      //reserve stack cards
      return <>
        <h2>{t('rules.guardian-animal.title')}</h2>
      </>
    }
  }

  const description = GuardianAnimalDescriptions[item.id]
  //varan card
  if (item.id === GuardianAnimal.Varan) {
    return <>
      <h2>{getAnimalTranslation(t, item.id)}</h2>
      <p>
        <Trans defaults="rules.varan.description">
          <span css={resourceStyle(ResourceImage[2])}/>
        </Trans>
      </p>
      <p>{t('rules.varan.destroy')}</p>
    </>
  }

  return (
    <>
      <h2>{getAnimalTranslation(t, item.id)}</h2>
      {activePlayer && discard && <p css={italic}>{t('rules.discard-stack')}</p>}
      {!activePlayer && discard && <p css={italic}>{t('rules.discard-stack-opponent', { player: playerName })}</p>}
      {activePlayer && helpline && <p css={italic}>{t('rules.help-line')}</p>}
      {!activePlayer && helpline &&<p css={italic}>{t('rules.help-line-opponent')}</p>}
      <p>{t('rules.guardian-animal.description')}</p>
      <Cost />
      <hr/>
      <Cost cost={description.cost} />
      <GregariousSolitary type={description.type} />
      <p css={alignIcon}>{t('rules.resources')} :
        {Object.keys(description.resources).map((element, index) => {
          return <span key={index}>{description.resources[element]}
            <span css={resourceStyle(ResourceImage[element])}/>
          </span>
        })}
      </p>
      {shuffleAndDraw && activePlayer && <hr/>}
      {shuffleAndDraw && activePlayer &&
        <Trans defaults="rules.shuffle-draw">
          <PlayMoveButton move={shuffleAndDraw} onPlay={closeDialog}/>
        </Trans>}
      {attract && <hr/>}
      {attract && <Trans defaults="rules.attract">
        <PlayMoveButton move={attract} onPlay={closeDialog}/>
      </Trans>}
    </>
  )
}

export const Cost: FC<{ cost?: number}> = ({cost}) => {
  if (cost !== undefined) {
    return (
      <p css={alignIconText}>
        <Trans defaults="rules.cost" values={{ cost: cost }}>
          <span css={resourceStyle(ResourceImage[1])}/>
        </Trans>
      </p>
    )
  }

  return (
    <p css={alignIconText}>
      <Trans defaults="rules.guardian-animal.get">
        <span css={resourceStyle(ResourceImage[1])}/>
      </Trans>
    </p>
  )
}

export const GregariousSolitary: FC<{ type?: CardType }> = ({ type }) => {
  if (!type) return null


  if (type === CardType.Solitary) {
    return (
      <p css={alignIconText }>
        <Trans defaults="help.solitary.desc">
          <span css={resourceStyle(Images.solitary)}/>
        </Trans>
      </p>
    )
  }

  return (
    <p css={alignIconText}>
      <Trans defaults="help.gregarious.desc">
        <span css={resourceStyle(Images.gregarious)}/>
        <span css={resourceStyle(Images.solitary)}/>
      </Trans>
    </p>
  )
}

export const ResourceImage: Record<Resource, string> = {
  [Resource.Sun]: Images.sun,
  [Resource.Drop]: Images.drop,
  [Resource.Seed]: Images.seed,
  [Resource.Wind]: Images.wind,
  [Resource.SacredFlower]: Images.sacredFlower
}

export const TypeImage: Record<CardType, string> = {
  [CardType.Gregarious]: Images.gregarious,
  [CardType.Solitary]: Images.solitary
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
  margin-right: 0.2em;
`

export const alignIcon = css`
  display: flex;
  //gap: 4px;
  align-items: start;
  justify-content: start;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
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

export const italic = css`
  font-style: italic;
  font-size: 0.9em;
`
