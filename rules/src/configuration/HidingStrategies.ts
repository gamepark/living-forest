import { MaterialType } from '../material/MaterialType'
import { LocationType } from '../material/LocationType'
import { hideItemId } from '@gamepark/rules-api'

export const hidingStrategies = {
    [MaterialType.GuardianAnimalCard]: {
        [LocationType.PlayerDeckStack]: hideItemId,
        [LocationType.ReserveStack]: hideItemId
    },
}