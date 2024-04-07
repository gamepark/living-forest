import { isEnumValue } from "@gamepark/rules-api"

enum ElementTile {
    Recto = 1,
    Verso,
}

export default ElementTile

export const elementTile = Object.values(ElementTile).filter(isEnumValue)
