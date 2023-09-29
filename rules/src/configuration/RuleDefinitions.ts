import { RuleId } from '../rules/RuleId'
import { MaterialRulesPartCreator } from '@gamepark/rules-api'
import { GuardianAnimalsRule } from '../rules/GuardianAnimalsRule'
import { TakeFragmentRule } from '../rules/actions/TakeFragmentRule'
import { AttractAnimalsRule } from '../rules/actions/AttractAnimalsRule'
import { ExtinguishFireRule } from '../rules/actions/ExtinguishFireRule'
import { PlantProtectiveTreeRule } from '../rules/actions/PlantProtectiveTreeRule'
import { ActionRule } from '../rules/ActionRule'
import { EndOfTurnRule } from '../rules/EndOfTurnRule'
import { OnibiAttacksPlayerRule } from '../rules/OnibiAttacksPlayerRule'
import { OnibiAttacksSacredTreeRule } from '../rules/OnibiAttacksSacredTreeRule'
import { GuardianAnimalsArrivalRule } from '../rules/GuardianAnimalsArrivalRule'
import { ReturnOfGuardianAnimalsRule } from '../rules/ReturnOfGuardianAnimalsRule'
import { PassingSacredTreeRule } from '../rules/PassingSacredTreeRule'
import { MoveOnCircleOfSpiritRule } from '../rules/actions/MoveOnCircleOfSpiritRule'
import { PickVictoryTileRule } from '../rules/actions/PickVictoryTileRule'


export const rules: Record<RuleId, MaterialRulesPartCreator> = {
    [RuleId.GuardianAnimals]: GuardianAnimalsRule,
    [RuleId.Action]: ActionRule,
    [RuleId.TakeFragment]: TakeFragmentRule,
    [RuleId.AttractAnimals]: AttractAnimalsRule,
    [RuleId.ExtinguishFire]: ExtinguishFireRule,
    [RuleId.PlantTree]: PlantProtectiveTreeRule,
    [RuleId.EndOfTurn]: EndOfTurnRule,
    [RuleId.OnibiAttacksPlayer]: OnibiAttacksPlayerRule,
    [RuleId.OnibiAttacksSacredTree]: OnibiAttacksSacredTreeRule,
    [RuleId.GuardianAnimalsArrival]: GuardianAnimalsArrivalRule,
    [RuleId.ReturnOfGuardianAnimals]: ReturnOfGuardianAnimalsRule,
    [RuleId.PassingSacredTree]: PassingSacredTreeRule,
    [RuleId.MoveOnCircleOfSpirit]: MoveOnCircleOfSpiritRule,
    [RuleId.PickVictoryTile]: PickVictoryTileRule
}