import { XYCoordinates } from '@gamepark/rules-api'
import range from 'lodash/range'

export const forestTreeSpaces: XYCoordinates[] = [
  ...range(5).map(x => ({ x, y: 0 })),
  ...range(5).filter((x) => x !== 2).map(x => ({ x, y: 1 })),
  ...range(5).map(x => ({ x, y: 2 })),
]