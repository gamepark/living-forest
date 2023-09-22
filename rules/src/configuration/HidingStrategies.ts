import { MaterialType } from '../refacto/material/MaterialType'
import { LocationType } from '../refacto/material/LocationType'
import { hideItemId } from '@gamepark/rules-api'

export const hidingStrategies = {
    [MaterialType.GuardianAnimalCard]: {
        [LocationType.PlayerDeckStack]: hideItemId,
        [LocationType.ReserveStack]: hideItemId
    },
}