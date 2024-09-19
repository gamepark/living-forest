import { css } from '@emotion/react'
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { DropAreaDescription, ListLocator, MaterialContext } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { guardianAnimalCardDescription } from '../material/description/GuardianAnimalCardDescription'
import { getPlayerBoardPositionOnTable } from '../utils/PositionOnTable'
import { HelpLineRules } from './description/HelpLineRules'

export class HelpLineLocator extends ListLocator {
  getLocations = ({ rules }: MaterialContext) => rules.players.map(player => ({ type: LocationType.HelpLine, player }))
  locationDescription = new HelpLineDescription()
  gap = { x: 2 }
  maxGap = { x: this.locationDescription.width - guardianAnimalCardDescription.width }

  getCoordinates(location: Location, { rules, player }: MaterialContext) {
    const { x, y } = getPlayerBoardPositionOnTable(rules, location.player!, player)
    return { x: x - 19 + guardianAnimalCardDescription.width / 2, y: y - 13 }
  }

  getHoverTransform = () => ['translateZ(10em)', 'scale(2)']
}

export class HelpLineDescription extends DropAreaDescription<SpiritOfNature, MaterialType, LocationType> {
  width = 38.2
  height = guardianAnimalCardDescription.height
  extraCss = css`
    background-color: rgba(0, 128, 0, 0.5);
    border-radius: 0.4em;
  `
  help = HelpLineRules
}
