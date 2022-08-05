

enum Fire {
  Fire2 = 1,
  Fire3,
  Fire4
}

export default Fire

export function getTotalFires(fires: (Fire | null)[]): number {
  return fires.reduce((sum, fire) => fire != null ? sum + fire + 1 : sum + 0, 0)

}