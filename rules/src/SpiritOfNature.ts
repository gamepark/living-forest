import { getEnumValues } from '@gamepark/rules-api'

enum SpiritOfNature {
  Winter = 1, Spring, Summer, Autumn
}

export default SpiritOfNature

export const spirits = getEnumValues(SpiritOfNature)
