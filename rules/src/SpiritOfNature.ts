import { isEnumValue } from '@gamepark/rules-api'

enum SpiritOfNature {
  Winter = 1, Spring, Summer, Autumn
}

export default SpiritOfNature

export const spirits = Object.values(SpiritOfNature).filter(isEnumValue)
