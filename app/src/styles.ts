import SpiritOfNature from "@gamepark/living-forest/SpiritOfNature"

export const cardHeight = 22
export const cardWith = cardHeight * 65 / 100
export const treeHeight = 14
export const treeWith = treeHeight
export const discardLeft = 150
export const discardTop = 25
export const playDrawTop = 60
export const playDrawLeft = 23
export const casesWidth = 120
export const casesHeight = casesWidth * 66 / 100
export const casesTop = -7
export const casesLeft = 38
export const spiritImage1Height = 25
export const spiritImage1Width = spiritImage1Height * 76 / 100
export const spiritImage2Height = 40
export const spiritImage2Width = spiritImage2Height * 55 / 100
export const panelHeight = 15
export const panelWidth = panelHeight * 2.2
export const panelLeft = 10
export const panelBottom = 0.1
export const firePanelHeight = 4
export const firePanelWidth = firePanelHeight * 0.75
export const firePanelLeft = 1
export const firePanelTop = 5
export const spiritTokenWidth = 14
export const spiritTokenHeight = spiritTokenWidth * 66 / 100
export const spiritTokenTop = 12
export const spiritTokenLeft = 30
export const helpLineTop = 60
export const helpLineLeft = 39
export const circleOfSpiritsTop = 15
export const circleOfSpiritsLeft = 88
export const circleOfSpiritswidth = 65
export const circleOfSpiritsHeight = circleOfSpiritswidth
export const spiritCircleHeight = 11
export const spiritCircleWidth = spiritCircleHeight * 59 / 100
export const spiritCircleTop = -5
export const spiritCircleLeft = -1
export const reserveTop = 2
export const reserveLeft = 7
export const reserveStacksTop = 13
export const reserveStacksLeft = 0
export const reserveCardHeight = 22
export const reserveCardWith = reserveCardHeight * 65 / 100
export const reserveRowDrawTop = 13
export const reserveRowDrawLeft = 16
export const reserveRowCardHeight = 22
export const reserveRowCardWith = reserveCardHeight * 65 / 100
export const reserveFireTop = 20
export const reserveFireLeft = 20
export const resourceheight = 3.5
export const resourceWidth = resourceheight
export const victoryTop = 8
export const victoryLeft = 8
export const disperserTop = -2
export const disperserLeft = 0
export const fragmentTop = 20
export const fragmentLeft = 160
export const fireTop = 20
export const fireLeft = 30
export const fireHeight = 8
export const fireWidth = fireHeight * 74 / 100
export const rockTop = 8
export const rockLeft = 28
export const rockHeight = 6
export const rockWith = 9
export const firstPlayerTop = 6
export const firstPlayerLeft = 1
export const firstPlayerHeight = 5
export const firstPlayerWith = firstPlayerHeight * 89 / 100
export const fireTotalTop = 3.2
export const fireTotalLeft = 49
export const forestTileHeight = 15
export const forestTileWidth = forestTileHeight
export const forestTileTop = 10
export const forestTileLeft = 14
export function getSpiritColor(color: SpiritOfNature): string {
    switch (color) {
        case SpiritOfNature.Spring:
            return '#36ab7a'
        case SpiritOfNature.Summer:
            return '#d9dd57'
        case SpiritOfNature.Autumn:
            return '#662e1e'
        case SpiritOfNature.Winter:
            return '#9681a4'
    }
}