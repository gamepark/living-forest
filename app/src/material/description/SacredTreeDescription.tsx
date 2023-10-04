import { TokenDescription } from '@gamepark/react-game'
import Images from '../../images/Images'
import { useTranslation } from 'react-i18next'

export class SacredTreeDescription extends TokenDescription {
  width = 5
  ratio = 356 / 320
  image = Images.SacredTree
  rules = () => {
    const { t } = useTranslation()
    return <>
      <h2>{t('rules.sacred-tree.title')}</h2>
      <p>{t('rules.sacred-tree.description')}</p>
    </>
  }
}

export const sacredTreeDescription = new SacredTreeDescription()