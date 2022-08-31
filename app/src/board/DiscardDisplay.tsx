/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GuardianAnimal from '@gamepark/living-forest/material/GuardianAnimal'
import { Dialog } from '@gamepark/react-components'
import { useState } from 'react'
import Scrollbars from 'react-custom-scrollbars-2'
import { useTranslation } from 'react-i18next'
import Card from '../material/Card'
import { cardHeight, cardWidth, dialogCloseIcon, largeDialogCss } from '../styles'

type Props = {
    size: number
    discard: GuardianAnimal[]
}

export default function DiscardDisplay({ size, discard }: Props) {
    const [catalogOpen, setCatalogOpen] = useState(false)
    const { t } = useTranslation()

    return (
        <>
            {[...Array(Math.min(size, 8))].map((_, index) => <Card key={index} css={style(index)} onClick={() => setCatalogOpen(true)} />)}
            <Dialog open={catalogOpen} onBackdropClick={() => setCatalogOpen(false)} css={largeDialogCss}>
                <h2>{t('Discard cards')}</h2>
                <FontAwesomeIcon icon={faXmark} css={dialogCloseIcon} onClick={() => setCatalogOpen(false)} />
                <Scrollbars style={{ width: `${(cardWidth + 1) * 10 + 2}em`, height: `80em` }}
                    css={scrollableContainer}>
                    <div css={catalogCss}>
                        {discard.map(card => <Card key={card} guardianAnimal={card} css={cardCss} />)}
                    </div>
                </Scrollbars>
            </Dialog>
        </>)
}

const style = (index: number) => css`
    position: absolute;
    top: ${60 + index * 0.1}em;
    left: ${125 + index * 0.1}em;
    &:after {
        box-shadow: 0 0 0.2em black, 0 0 0.2em black, 0 0 0.2em black;
    }
`

const scrollableContainer = css`
    // trick to avoid very thin bar on some resolutions with react-custom-scrollbars-2
    & > div {
        scrollbar-width: none;
        -ms-overflow-style: none;
        ::-webkit-scrollbar {
            width: 0;
            height: 0;
        }
    }
`

const catalogCss = css`
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-gap: 1em;
    grid-auto-rows: ${cardHeight}em;
    margin-right: 17px;
    margin-bottom: 17px;
    padding: 1em;
`

const cardCss = css`
    position: relative;
    > div {
        box-shadow: 0 0 0.1em black, 0 0 0.1em black, 0 0 0.1em black;
    }
`