import { getEnumValues } from '@gamepark/rules-api'

export enum Resource {
  Sun = 1, Drop, Seed, Wind, SacredFlower
}

export const resources = getEnumValues(Resource)
