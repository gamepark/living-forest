import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'

export const DISPLAY_SCREEN = 'DisplayScreen'

export default interface DisplayScreen {
  type: typeof DISPLAY_SCREEN
  spiritOfNature?: SpiritOfNature
}

export const displayScreenMove = (spiritOfNature?: SpiritOfNature): DisplayScreen => ({
  type: DISPLAY_SCREEN, spiritOfNature
})
