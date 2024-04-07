/** @jsxImportSource @emotion/react */
import Resource from '@gamepark/living-forest/material/Resource'
import Images from '../images/Images'
import { FC } from 'react'
import { PlayerCounter } from './PlayerCounter'

type PlayerResourceProps = {
  type: Resource
  value: number
}

export const PlayerResource: FC<PlayerResourceProps> = (props) => {
  const { type, value } = props
  return <PlayerCounter image={ResourceImage[type]} value={value} />

}

const ResourceImage: Record<Resource, string> = {
  [Resource.Sun]: Images.sun,
  [Resource.Drop]: Images.drop,
  [Resource.Seed]: Images.seed,
  [Resource.Wind]: Images.wind,
  [Resource.SacredFlower]: Images.sacredFlower,
  [Resource.Kodama]: Images.Kodama,
}