import { isEnumValue } from '@gamepark/rules-api'

enum Resource {
    Sun = 1, Drop, Seed, Wind, SacredFlower, Kodama
}

export const resources = Object.values(Resource).filter(isEnumValue)
export default Resource