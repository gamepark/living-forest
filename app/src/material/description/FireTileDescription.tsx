/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Fire } from '@gamepark/living-forest/material/Fire'
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import { ItemContext, TokenDescription } from '@gamepark/react-game'
import { isMoveItemType, MaterialItem, MaterialMove } from '@gamepark/rules-api'
import Images from '../../images/Images'
import { FileTileRules } from './help/FireTileHelp'

export class FireTileDescription extends TokenDescription {
  images = {
    [Fire.Fire2]: Images.fire2,
    [Fire.Fire3]: Images.fire3,
    [Fire.Fire4]: Images.fire4
  }

  getItemExtraCss(item: MaterialItem) {
    const padding = 1
    return css`
      border-radius: 1em 1em 0.5em 0.5em;
      height: ${this.getSize(item.id).height + padding}em;
      width: ${this.getSize(item.id).width + padding}em;
      padding: ${padding / 2}em;
    `
  }

  getSize(id: Fire) {
    switch (id) {
      case Fire.Fire2:
        return { width: 2, height: 2.7 }
      case Fire.Fire3:
        return { width: 2.3, height: 3.1 }
      case Fire.Fire4:
        return { width: 2.6, height: 3.5 }
    }
  }

  help = FileTileRules

  canShortClick(move: MaterialMove, context: ItemContext): boolean {
    if (!isMoveItemType(MaterialType.FireTile)(move) || move.location.type !== LocationType.PlayerFireTileStack) return false
    const { rules } = context
    const item = rules.material(context.type).getItem(context.index)
    return move.itemIndex === context.index && item.location.type === LocationType.CircleOfSpiritBoardFire

  }
}

export const fireTileDescription = new FireTileDescription()
