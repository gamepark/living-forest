import { GameProvider, MaterialGameAnimations, setupTranslation } from '@gamepark/react-game'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import translations from './translations.json'
import { LivingForestSetup } from '@gamepark/living-forest/LivingForestSetup'
import { LivingForestRules } from '@gamepark/living-forest/LivingForestRules'
import { LivingForestOptionsSpec } from '@gamepark/living-forest/LivingForestOptions'
import { material } from './material/Material'
import { locators } from './locator/Locator'
import Images from './images/Images'

setupTranslation(translations, { debug: false })

ReactDOM.render(
  <StrictMode>
    <GameProvider game="living-forest"
                  GameSetup={LivingForestSetup}
                  Rules={LivingForestRules}
                  optionsSpec={LivingForestOptionsSpec}
                  material={material}
                  locators={locators}
                  animations={new MaterialGameAnimations()}
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
      <App/>
    </GameProvider>
  </StrictMode>,
  document.getElementById('root')
)

