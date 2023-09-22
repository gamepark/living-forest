import { isEnumValue } from '@gamepark/rules-api'


export enum Fire {
  // Start to value, to simplify compute
  Fire2 = 2,
  Fire3,
  Fire4
}

export const fires = Object.values(Fire).filter<Fire>(isEnumValue)