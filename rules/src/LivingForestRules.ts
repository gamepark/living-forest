import { CompetitiveRank, FillGapStrategy, hideItemId, MaterialGame, MaterialMove, PositiveSequenceStrategy, SecretMaterialRules } from '@gamepark/rules-api'
import { LocationType } from './material/LocationType'
import { MaterialType } from './material/MaterialType'
import { ActionRule } from './rules/ActionRule'
import { AttractAnimalsRule } from './rules/actions/AttractAnimalsRule'
import { ExtinguishFireRule } from './rules/actions/ExtinguishFireRule'
import { MoveOnCircleOfSpiritRule } from './rules/actions/MoveOnCircleOfSpiritRule'
import { PickVictoryTileRule } from './rules/actions/PickVictoryTileRule'
import { PlantProtectiveTreeRule } from './rules/actions/PlantProtectiveTreeRule'
import { TakeFragmentRule } from './rules/actions/TakeFragmentRule'
import { EndOfTurnRule } from './rules/EndOfTurnRule'
import { GuardianAnimalsArrivalRule } from './rules/GuardianAnimalsArrivalRule'
import { GuardianAnimalsRule } from './rules/GuardianAnimalsRule'
import { ScoringRule } from './rules/helper/ScoringRule'
import { OnibiAttacksPlayerRule } from './rules/OnibiAttacksPlayerRule'
import { OnibiAttacksSacredTreeRule } from './rules/OnibiAttacksSacredTreeRule'
import { PassingSacredTreeRule } from './rules/PassingSacredTreeRule'
import { ReturnOfGuardianAnimalsRule } from './rules/ReturnOfGuardianAnimalsRule'
import { RuleId } from './rules/RuleId'
import SpiritOfNature from './SpiritOfNature'

export class LivingForestRules extends SecretMaterialRules<SpiritOfNature, MaterialType, LocationType>
  implements CompetitiveRank<MaterialGame<SpiritOfNature, MaterialType, LocationType>, MaterialMove<SpiritOfNature, MaterialType, LocationType>, SpiritOfNature> {

  rankPlayers(playerA: SpiritOfNature, playerB: SpiritOfNature): number {
    return new ScoringRule(this.game).rankPlayers(playerA, playerB)
  }


  rules = {
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

  locationsStrategies= {
    [MaterialType.GuardianAnimalCard]: {
      [LocationType.ReserveStack]: new PositiveSequenceStrategy(),
      [LocationType.ReserveRow]: new FillGapStrategy(),
      [LocationType.PlayerDeckStack]: new PositiveSequenceStrategy(),
      [LocationType.PlayerDiscardStack]: new PositiveSequenceStrategy(),
      [LocationType.HelpLine]: new PositiveSequenceStrategy(),
      [LocationType.VaranDeck]: new PositiveSequenceStrategy()
    },
    [MaterialType.VictoryTile]: {
      [LocationType.VictoryTileArea]: new PositiveSequenceStrategy()
    },
    [MaterialType.ProtectiveTreeTiles]: {
      [LocationType.TreeDispenser]: new FillGapStrategy()
    },
    [MaterialType.FireTile]: {
      [LocationType.CircleOfSpiritBoardFire]: new FillGapStrategy(),
      [LocationType.PlayerFireTileStack]: new PositiveSequenceStrategy()
    },
    [MaterialType.FragmentTile]: {
      [LocationType.PlayerFragmentTileStack]: new PositiveSequenceStrategy()
    }
  }

  hidingStrategies = {
    [MaterialType.GuardianAnimalCard]: {
      [LocationType.PlayerDeckStack]: hideItemId,
      [LocationType.ReserveStack]: hideItemId
    }
  }
}
