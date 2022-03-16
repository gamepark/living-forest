import PlayerState from './PlayerState'

type PlayerView = Omit<PlayerState, 'deck'> & {
  deck: number
}

export default PlayerView