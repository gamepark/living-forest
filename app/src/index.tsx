import { css, Global } from '@emotion/react'
import { LivingForestOptionsSpec } from '@gamepark/living-forest/LivingForestOptions'
import LivingForest from '@gamepark/living-forest/LivingForest'
import { GameProvider, setupTranslation } from '@gamepark/react-client'
import normalize from 'emotion-normalize'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import LivingForestView from './LivingForestView'
import translations from './translations.json'

setupTranslation(translations, { debug: false })

const style = css`
  html {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  *, *::before, *::after {
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: 'Oswald', "Roboto Light", serif;
    font-size: 1vh;
    @media (max-aspect-ratio: 185/100) {
      font-size: calc(100vw / 185);
    }
  }

  #root {
    position: absolute;
    height: 100vh;
    width: 100vw;
    user-select: none;
    overflow: hidden;
    background-color: white;
    background-size: cover;
    background-position: center;
    color: #eee;

    &:before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      //background-color: rgba(255, 255, 255, 0.5);
    }
  }
`

ReactDOM.render(
  <StrictMode>
    <GameProvider game="living-forest" Rules={LivingForest} RulesView={LivingForestView} optionsSpec={LivingForestOptionsSpec}>
      <App />
    </GameProvider>
    <Global styles={[normalize, style]} />
  </StrictMode>,
  document.getElementById('root')
)
