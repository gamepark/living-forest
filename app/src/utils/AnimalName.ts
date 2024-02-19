import GuardianAnimal from '@gamepark/living-forest/material/GuardianAnimal'
import { TFunction } from 'i18next'


export const getAnimalTranslation = (t: TFunction, animal: GuardianAnimal) => {
  return t(`guardian.${animal}`)
}