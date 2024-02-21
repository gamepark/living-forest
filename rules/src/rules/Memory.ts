import Resource from '../material/Resource'

export enum Memory {
  Actions = 1,
  SpentPoints,
  LastAction,
  Bonus,
  FragmentTaken,
  RemainingMoves,
  PassedPlayers
}

export type SpentPoint = Partial<Record<Resource, number>>