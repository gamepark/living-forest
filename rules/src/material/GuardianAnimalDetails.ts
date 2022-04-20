import Resource from "./Resource"
import CardType from './CardType';

type GuardianAnimalDetails = {
    resource: { [key in Resource]?: number }
    cost?: number
    type?: CardType
}

export default GuardianAnimalDetails