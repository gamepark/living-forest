/**
 * Enumeration of all the types of Move in you game.
 * Even though it is not strictly required to use a type like that, it helps a lot in practice!
 */
enum MoveType {
  DrawCard, ShuffleToDraw, ShuffleDiscard, FillReserve, PlantTree, TakeFragmentTile, MoveCircleOfSpirits, TellYouAreReady, StartPhase, AttractGuardianAnimal, ExtinguishFire
}

export default MoveType