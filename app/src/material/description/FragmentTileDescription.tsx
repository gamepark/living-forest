import { TokenDescription } from '@gamepark/react-game'
import Images from '../../images/Images'
import { useTranslation } from 'react-i18next'

export class FragmentTileDescription extends TokenDescription {
  width = 3
  ratio = 1
  image = Images.fragment
  rules = () => {
    const { t } = useTranslation()
    return <>
      <h2>{t('rules.fragment.title')}</h2>
      <p>{t('rules.fragment.description')}</p>
      <p>{t('rules.fragment.get')}</p>
    </>
  }
}

export const fragmentTileDescription = new FragmentTileDescription()