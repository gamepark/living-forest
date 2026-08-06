import { LivingForestOptionsSpecV2 } from '@gamepark/living-forest/LivingForestOptions'
import { LivingForestRules } from '@gamepark/living-forest/LivingForestRules'
import { LivingForestSetup } from '@gamepark/living-forest/LivingForestSetup'
import { GameProvider, LogDescription } from '@gamepark/react-game'
import { MaterialMove } from '@gamepark/rules-api'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { livingForestAnimations } from './animation/LivingForestAnimations'
import App from './App'
import { LivingForestHistoryHistory } from './history/LivingForestHistory'
import { locators } from './locator/Locator'
import { material } from './material/Material'
import { Tutorial } from './tutorial/Tutorial'
import { ai } from './tutorial/TutorialAi'

const logs: LogDescription<MaterialMove> = {
  getMovePlayedLogDescription: () => ({ Component: LivingForestHistoryHistory })
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GameProvider game="living-forest"
      GameSetup={LivingForestSetup}
      Rules={LivingForestRules}
      optionsSpec={LivingForestOptionsSpecV2}
      material={material}
      locators={locators}
      animations={livingForestAnimations}
      logs={logs}
      tutorial={new Tutorial()}
      ai={ai}
    >
      <App />
    </GameProvider>
  </StrictMode>
)
