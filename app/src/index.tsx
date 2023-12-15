import { LivingForestOptionsSpec } from '@gamepark/living-forest/LivingForestOptions'
import { LivingForestRules } from '@gamepark/living-forest/LivingForestRules'
import { LivingForestSetup } from '@gamepark/living-forest/LivingForestSetup'
import { GameProvider, setupTranslation } from '@gamepark/react-game'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { LivingForestAnimations } from './animation/LivingForestAnimations'
import App from './App'
import Images from './images/Images'
import { Tutorial } from './tutorial/Tutorial'
import { material } from './material/Material'
import { locators } from './locator/Locator'
import translations from './translations.json'

setupTranslation(translations, { debug: false })

ReactDOM.render(
  <StrictMode>
    <GameProvider game="living-forest"
      GameSetup={LivingForestSetup}
      Rules={LivingForestRules}
      optionsSpec={LivingForestOptionsSpec}
      material={material}
      locators={locators}
      animations={new LivingForestAnimations()}
      tutorial={new Tutorial()}
      theme={{
        root: {
          background: {
            image: Images.forestBack,
            overlay: 'rgba(0, 0, 0, 0.7)'
          }
        },
        dialog: {
          color: '#6B4135',
          backgroundColor: '#FEF9F5'
        }
      }}
    >
      <App />
    </GameProvider>
  </StrictMode>,
  document.getElementById('root')
)

