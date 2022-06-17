import SpiritOfNature from '../SpiritOfNature';
import Fire from './Fire';

type CircleOfSpirits = {
    rock: number[]
    fire: (Fire | null)[]
    position: Partial<Record<SpiritOfNature, number>>
}

export default CircleOfSpirits
