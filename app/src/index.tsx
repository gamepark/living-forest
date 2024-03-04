import { LivingForestOptionsSpec } from '@gamepark/living-forest/LivingForestOptions'
import { LivingForestRules } from '@gamepark/living-forest/LivingForestRules'
import { LivingForestSetup } from '@gamepark/living-forest/LivingForestSetup'
import { GameProvider, setupTranslation } from '@gamepark/react-game'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { livingForestAnimations } from './animation/LivingForestAnimations'
import App from './App'
import { LivingForestHistoryHistory } from './history/LivingForestHistory'
import { locators } from './locator/Locator'
import { material } from './material/Material'
import translations from './translations.json'
import { Tutorial } from './tutorial/Tutorial'
import { ai } from './tutorial/TutorialAi'

setupTranslation(translations, { debug: false })

ReactDOM.render(
  <StrictMode>
    <GameProvider game="living-forest"
      GameSetup={LivingForestSetup}
      Rules={LivingForestRules}
      optionsSpec={LivingForestOptionsSpec}
      material={material}
      locators={locators}
      animations={livingForestAnimations}
      MaterialHistory={LivingForestHistoryHistory}
      tutorial={new Tutorial()}
      ai={ai}
    >
      <App />
    </GameProvider>
  </StrictMode>,
  document.getElementById('root')
)

