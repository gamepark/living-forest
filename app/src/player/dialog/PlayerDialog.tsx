/** @jsxImportSource @emotion/react */
//import { getPlayerName } from '@gamepark/living-forest/LivingForestOptions'
//import { LivingForestRules } from '@gamepark/living-forest/LivingForestRules'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { RulesDialog, /*usePlayerName, useRules*/ } from '@gamepark/react-game'
import { FC } from 'react'
//import { useTranslation } from 'react-i18next'


type PlayerDialogProps = {
    player: SpiritOfNature
    close: () => void
    open: boolean
}

export const PlayerDialog: FC<PlayerDialogProps> = ({ open, close, /*player*/ }) => {
    //const { t } = useTranslation()
    //const rules = useRules<LivingForestRules>()!
    //const name = usePlayerName(player) ?? getPlayerName(player, t)

    //console.log(rules);
    //console.log(name);

    return (
        <RulesDialog open={open} close={close}>
        </RulesDialog>)
}