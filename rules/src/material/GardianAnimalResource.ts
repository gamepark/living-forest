import Resource from './Resource';

export default function guardianAnimalResource(cost: { [key in Resource]?: number }): Record<Resource, number> {
  return {
    [Resource.Sun]: cost[Resource.Sun] || 0,
    [Resource.Drop]: cost[Resource.Drop] || 0,
    [Resource.Seed]: cost[Resource.Seed] || 0,
    [Resource.Wind]: cost[Resource.Wind] || 0,
    [Resource.SacredFlower]: cost[Resource.SacredFlower] || 0,
  }
}