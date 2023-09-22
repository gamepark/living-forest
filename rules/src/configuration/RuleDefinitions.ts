import { RuleId } from '../refacto/rules/RuleId'
import { MaterialRulesPartCreator } from '@gamepark/rules-api'
import { GuardianAnimalsRule } from '../refacto/rules/GuardianAnimalsRule'
import { TakeFragmentRule } from '../refacto/rules/actions/TakeFragmentRule'
import { AttractAnimalsRule } from '../refacto/rules/actions/AttractAnimalsRule'
import { ExtinguishFireRule } from '../refacto/rules/actions/ExtinguishFireRule'
import { PlantProtectiveTreeRule } from '../refacto/rules/actions/PlantProtectiveTreeRule'
import { ActionRule } from '../refacto/rules/ActionRule'
import { EndOfTurnRule } from '../refacto/rules/EndOfTurnRule'
import { OnibiAttacksPlayerRule } from '../refacto/rules/OnibiAttacksPlayerRule'
import { OnibiAttacksSacredTreeRule } from '../refacto/rules/OnibiAttacksSacredTreeRule'
import { GuardianAnimalsArrivalRule } from '../refacto/rules/GuardianAnimalsArrivalRule'
import { ReturnOfGuardianAnimalsRule } from '../refacto/rules/ReturnOfGuardianAnimalsRule'


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
    [RuleId.PassingSacredTree]: ReturnOfGuardianAnimalsRule,
}