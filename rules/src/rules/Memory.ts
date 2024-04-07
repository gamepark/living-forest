import Resource from '../material/Resource'

export enum Memory {
  Actions = 1,
  SpentPoints,
  LastAction,
  Bonus,
  FragmentTaken,
  RemainingMoves,
  PassedPlayers,
  DrawUntilSolitary,
  Kodama
}

export type SpentPoint = Partial<Record<Resource, number>>