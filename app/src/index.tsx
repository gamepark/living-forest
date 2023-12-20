import { LivingForestOptionsSpec } from '@gamepark/living-forest/LivingForestOptions'
import { LivingForestRules } from '@gamepark/living-forest/LivingForestRules'
import { LivingForestSetup } from '@gamepark/living-forest/LivingForestSetup'
import { GameProvider, setupTranslation } from '@gamepark/react-game'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { LivingForestAnimations } from './animation/LivingForestAnimations'
import App from './App'
import { locators } from './locator/Locator'
import { material } from './material/Material'
import translations from './translations.json'
import { Tutorial } from './tutorial/Tutorial'

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
    >
      <App />
    </GameProvider>
  </StrictMode>,
  document.getElementById('root')
)

