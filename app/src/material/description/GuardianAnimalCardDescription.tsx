/** @jsxImportSource @emotion/react */
import { CardDescription, ItemContext, MaterialRulesProps } from '@gamepark/react-game'
import Images from '../../images/Images'
import GuardianAnimal from '@gamepark/living-forest/material/GuardianAnimal'
import { isMoveItemType, MaterialMove } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import { LocationType } from '@gamepark/living-forest/material/LocationType'
// import { TFunction } from 'i18next'
// import { useTranslation } from 'react-i18next'
import { GuardianAnimalDescriptions } from '@gamepark/living-forest/material/GuardianAnimalDescriptions';
import Resource from '@gamepark/living-forest/material/Resource'
import { css } from '@emotion/react'
import { Trans, useTranslation } from 'react-i18next'

export class GuardianAnimalCardDescription extends CardDescription {
  backImage = Images.sampleImage

  images = {
    [GuardianAnimal.Bear]: Images.bear1,
    [GuardianAnimal.Beetle]: Images.beetle1,
    [GuardianAnimal.Lynx]: Images.lynx1,
    [GuardianAnimal.Fox]: Images.fox1,
    [GuardianAnimal.GoldFish]: Images.goldfish1,
    [GuardianAnimal.Tanuki]: Images.tanuki1,
    [GuardianAnimal.Boar]: Images.boar1,
    [GuardianAnimal.Weasel]: Images.weasel1,
    [GuardianAnimal.Rabbit]: Images.rabbit1,
    [GuardianAnimal.Doe]: Images.doe1,
    [GuardianAnimal.HummingBird]: Images.hummingbird1,
    [GuardianAnimal.Bee]: Images.bee1,
    [GuardianAnimal.Monkey]: Images.monkey1,
    [GuardianAnimal.Owl]: Images.owl1,

    [GuardianAnimal.Hedgehog]: Images.hedgehog,
    [GuardianAnimal.Caterpillar]: Images.caterpillar,
    [GuardianAnimal.Flamingo]: Images.flamingo,
    [GuardianAnimal.Ram]: Images.ram,
    [GuardianAnimal.Wolf]: Images.wolf,
    [GuardianAnimal.Lemur]: Images.lemur,
    [GuardianAnimal.Squirrel]: Images.squirrel,
    [GuardianAnimal.Turtle]: Images.turtle,
    [GuardianAnimal.Coati]: Images.coati,
    [GuardianAnimal.Racoon]: Images.racoon,
    [GuardianAnimal.Beaver]: Images.beaver,
    [GuardianAnimal.Raven]: Images.raven,
    [GuardianAnimal.Bat]: Images.bat,
    [GuardianAnimal.Parrot]: Images.parrot,
    [GuardianAnimal.Meerkat]: Images.meerkat,
    [GuardianAnimal.Horse]: Images.horse,
    [GuardianAnimal.Axolotls]: Images.axolotls,
    [GuardianAnimal.Chimpanzee]: Images.chimpanzee,
    [GuardianAnimal.Toucan]: Images.toucan,
    [GuardianAnimal.Butterfly]: Images.butterfly,
    [GuardianAnimal.Spider]: Images.spider,
    [GuardianAnimal.Hippopotamus]: Images.hippopotamus,
    [GuardianAnimal.EagleOwl]: Images.eagleowl,
    [GuardianAnimal.Woodpecker]: Images.woodpecker,
    [GuardianAnimal.Badger]: Images.badger,
    [GuardianAnimal.Rooster]: Images.rooster,
    [GuardianAnimal.Rhinoceros]: Images.rhinoceros,
    [GuardianAnimal.Goat]: Images.goat,
    [GuardianAnimal.Bull]: Images.bull,
    [GuardianAnimal.Lizard]: Images.lizard,
    [GuardianAnimal.Frog]: Images.frog,
    [GuardianAnimal.Marmot]: Images.marmot,
    [GuardianAnimal.Platypus]: Images.platypus,
    [GuardianAnimal.Crane]: Images.crane,
    [GuardianAnimal.Sloth]: Images.sloth,
    [GuardianAnimal.Koala]: Images.koala,
    [GuardianAnimal.Leopard]: Images.leopard,
    [GuardianAnimal.Eagle]: Images.eagle,
    [GuardianAnimal.Snake]: Images.snake,
    [GuardianAnimal.Cricket]: Images.cricket,
    [GuardianAnimal.Panther]: Images.panther,
    [GuardianAnimal.Gorilla]: Images.gorilla,
    [GuardianAnimal.Bison]: Images.bison,
    [GuardianAnimal.Chameleon]: Images.chameleon,
    [GuardianAnimal.Crocodile]: Images.crocodile,
    [GuardianAnimal.Elephant]: Images.elephant,
    [GuardianAnimal.Dolphin]: Images.dolphin,
    [GuardianAnimal.Dog]: Images.dog,
    [GuardianAnimal.Panda]: Images.panda,
    [GuardianAnimal.Stag]: Images.stag,
    [GuardianAnimal.Tapir]: Images.tapir,
    [GuardianAnimal.Varan]: Images.varan
  }

  canDrag(move: MaterialMove, context: ItemContext) {
    const { index, rules, player } = context
    const drag = super.canDrag(move, context)
    if (drag) return drag
    if (!isMoveItemType(MaterialType.FragmentTile)(move) || move.position.location?.type !== LocationType.FragmentStack) return false

    const item = rules.material(MaterialType.GuardianAnimalCard).getItem(index)!
    const helpLine = rules.material(MaterialType.GuardianAnimalCard).location(LocationType.HelpLine).player(item.location.player)
    return (item.location.x === (helpLine.length - 1)) && item.location.player === player
  }

  rules = (props: MaterialRulesProps) => {
    const { item } = props
    const { t } = useTranslation()
    if (item.id == 66) {
      return <>
        <h2>{t('rules.varan.title')}</h2>
        <p>
          <Trans defaults="rules.varan.description">
            <span css={resourceStyle(ResourceImage[2])} />
          </Trans>
        </p>
        <p>{t('rules.varan.destroy')}</p>
      </>
    } else {
      return <>
        <h2>{t('rules.guardian-animal.title')}</h2>
        <p>{t('rules.guardian-animal.description')}</p>
        <p>
          <Trans defaults="rules.circle-spirit.description">
            <span css={resourceStyle(ResourceImage[1])} />
          </Trans>
        </p>
        <p>
          <Trans defaults="rules.circle-spirit.get">
            <span css={resourceStyle(ResourceImage[1])} />
          </Trans>
        </p>
        <hr />
        <p>{t('rules.cost')} : {GuardianAnimalDescriptions[item.id].cost} <div css={resourceStyle(ResourceImage[1])} /></p>
        <div>{t('rules.resources')} :
          {Object.keys(GuardianAnimalDescriptions[item.id].resources).map((element, index) => {
            return <>{GuardianAnimalDescriptions[item.id].resources[element]}
              <span key={index} css={resourceStyle(ResourceImage[element])} />
            </>
          })}
        </div>
      </>
    }

  }
}

const ResourceImage: Record<Resource, string> = {
  [Resource.Sun]: Images.sun,
  [Resource.Drop]: Images.drop,
  [Resource.Seed]: Images.seed,
  [Resource.Wind]: Images.wind,
  [Resource.SacredFlower]: Images.sacredFlower,
}

const resourceStyle = (image: string) => css`
  flex: 1;
  align-self: center;
  background-image: url(${image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 1.2em;
  height: 1.2em;
  filter: drop-shadow(0.1em 0.1em 0.2em gray);
  display:inline-block;
`

// const getDescriptionGuardianAnimal = (guardianAnimal: GuardianAnimal, t: TFunction): string => {
//   switch (guardianAnimal) {
//     case GuardianAnimal.Bear:
//       return t('place.guatemala')
//     case GuardianAnimal.Beetle:
//       return t('place.guatemala')
//     case GuardianAnimal.Lynx:
//       return t('place.guatemala')
//     case GuardianAnimal.Fox:
//       return t('place.guatemala')
//     case GuardianAnimal.GoldFish:
//       return t('place.guatemala')
//     case GuardianAnimal.Tanuki:
//       return t('place.guatemala')
//     case GuardianAnimal.Boar:
//       return t('place.guatemala')
//     case GuardianAnimal.Weasel:
//       return t('place.guatemala')
//     case GuardianAnimal.Rabbit:
//       return t('place.guatemala')
//     case GuardianAnimal.Doe:
//       return t('place.guatemala')
//     case GuardianAnimal.HummingBird:
//       return t('place.guatemala')
//     case GuardianAnimal.Bee:
//       return t('place.guatemala')
//     case GuardianAnimal.Monkey:
//       return t('place.guatemala')
//     case GuardianAnimal.Owl:
//       return t('place.guatemala')

//       [GuardianAnimal.Hedgehog]: Images.hedgehog,
//         [GuardianAnimal.Caterpillar]: Images.caterpillar,
//           [GuardianAnimal.Flamingo]: Images.flamingo,
//             [GuardianAnimal.Ram]: Images.ram,
//               [GuardianAnimal.Wolf]: Images.wolf,
//                 [GuardianAnimal.Lemur]: Images.lemur,
//                   [GuardianAnimal.Squirrel]: Images.squirrel,
//                     [GuardianAnimal.Turtle]: Images.turtle,
//                       [GuardianAnimal.Coati]: Images.coati,
//                         [GuardianAnimal.Racoon]: Images.racoon,
//                           [GuardianAnimal.Beaver]: Images.beaver,
//                             [GuardianAnimal.Raven]: Images.raven,
//                               [GuardianAnimal.Bat]: Images.bat,
//                                 [GuardianAnimal.Parrot]: Images.parrot,
//                                   [GuardianAnimal.Meerkat]: Images.meerkat,
//                                     [GuardianAnimal.Horse]: Images.horse,
//                                       [GuardianAnimal.Axolotls]: Images.axolotls,
//                                         [GuardianAnimal.Chimpanzee]: Images.chimpanzee,
//                                           [GuardianAnimal.Toucan]: Images.toucan,
//                                             [GuardianAnimal.Butterfly]: Images.butterfly,
//                                               [GuardianAnimal.Spider]: Images.spider,
//                                                 [GuardianAnimal.Hippopotamus]: Images.hippopotamus,
//                                                   [GuardianAnimal.EagleOwl]: Images.eagleowl,
//                                                     [GuardianAnimal.Woodpecker]: Images.woodpecker,
//                                                       [GuardianAnimal.Badger]: Images.badger,
//                                                         [GuardianAnimal.Rooster]: Images.rooster,
//                                                           [GuardianAnimal.Rhinoceros]: Images.rhinoceros,
//                                                             [GuardianAnimal.Goat]: Images.goat,
//                                                               [GuardianAnimal.Bull]: Images.bull,
//                                                                 [GuardianAnimal.Lizard]: Images.lizard,
//                                                                   [GuardianAnimal.Frog]: Images.frog,
//                                                                     [GuardianAnimal.Marmot]: Images.marmot,
//                                                                       [GuardianAnimal.Platypus]: Images.platypus,
//                                                                         [GuardianAnimal.Crane]: Images.crane,
//                                                                           [GuardianAnimal.Sloth]: Images.sloth,
//                                                                             [GuardianAnimal.Koala]: Images.koala,
//                                                                               [GuardianAnimal.Leopard]: Images.leopard,
//                                                                                 [GuardianAnimal.Eagle]: Images.eagle,
//                                                                                   [GuardianAnimal.Snake]: Images.snake,
//                                                                                     [GuardianAnimal.Cricket]: Images.cricket,
//                                                                                       [GuardianAnimal.Panther]: Images.panther,
//                                                                                         [GuardianAnimal.Gorilla]: Images.gorilla,
//                                                                                           [GuardianAnimal.Bison]: Images.bison,
//                                                                                             [GuardianAnimal.Chameleon]: Images.chameleon,
//                                                                                               [GuardianAnimal.Crocodile]: Images.crocodile,
//                                                                                                 [GuardianAnimal.Elephant]: Images.elephant,
//                                                                                                   [GuardianAnimal.Dolphin]: Images.dolphin,
//                                                                                                     [GuardianAnimal.Dog]: Images.dog,
//                                                                                                       [GuardianAnimal.Panda]: Images.panda,
//                                                                                                         [GuardianAnimal.Stag]: Images.stag,
//                                                                                                           [GuardianAnimal.Tapir]: Images.tapir,
//                                                                                                             [GuardianAnimal.Varan]: Images.varan
//     //     case Place.Denali:
//     //     case Place.CraterLake:
//     //     case Place.OldFaithful:
//     //     case Place.PuertoRico:
//     //     case Place.GrandCanyon:
//     //     case Place.Louisiane:
//     //       return t('place.usa')
//     //     case Place.MackenzieDelta:
//     //     case Place.Banff:
//     //     case Place.Newfoundland:
//     //       return t('place.canada')
//     //     case Place.NorthwestPassage:
//     //       return t('place.arctic-ocean')
//     //     case Place.NiagaraFalls:
//     //       return t('place.canada-usa')
//     //     case Place.Teotihuacan:
//     //       return t('place.mexico')
//     //     case Place.Tikal:
//     //       return t('place.guatemala')
//     //     case Place.SaltoAngel:
//     //       return t('place.venezuela')
//     //     case Place.Marajo:
//     //     case Place.Aripuana:
//     //     case Place.SalvadorDeBahia:
//     //       return t('place.brazil')
//     //     case Place.AmazonRainforest:
//     //       return t('place.amazon')
//     //     case Place.MachuPicchu:
//     //       return t('place.peru')
//     //     case Place.Altiplano:
//     //       return t('place.bolivia')
//     //     case Place.IguazuFalls:
//     //       return t('place.argentina-brazil')
//     //     case Place.Atacama:
//     //       return t('place.chile-peru')
//     //     case Place.GalapagosIslands:
//     //       return t('place.ecuador')
//     //     case Place.RapaNui:
//     //       return t('place.chile')
//     //     case Place.TierraDelFuego:
//     //       return t('place.argentina-chile')
//     //     case Place.GrahamLand:
//     //       return t('place.antartic')
//     //     case Place.Svalbard:
//     //       return t('place.norway')
//     //     case Place.Thingvellir:
//     //       return t('place.iceland')
//     //     case Place.Stonehenge:
//     //       return t('place.uk')
//     //     case Place.Rome:
//     //       return t('place.italy')
//     //     case Place.Athens:
//     //       return t('place.greece')
//     //     case Place.Timgad:
//     //       return t('place.algeria')
//     //     case Place.CanaryIslands:
//     //       return t('place.spain')
//     //     case Place.Giza:
//     //       return t('place.egypt')
//     //     case Place.Timbuktu:
//     //       return t('place.mali')
//     //     case Place.Kush:
//     //       return t('place.sudan-egypt')
//     //     case Place.Aksum:
//     //       return t('place.ethiopa')
//     //     case Place.Elmina:
//     //       return t('place.ghana')
//     //     case Place.Douala:
//     //       return t('place.cameroon')
//     //     case Place.Virunga:
//     //       return t('place.congo')
//     //     case Place.VictoriaFalls:
//     //       return t('place.zambia')
//     //     case Place.Omatako:
//     //       return t('place.namibia')
//     //     case Place.Petra:
//     //       return t('place.jordan')
//     //     case Place.Babylone:
//     //       return t('place.iraq')
//     //     case Place.Persepolis:
//     //       return t('place.iran')
//     //     case Place.Sanaa:
//     //       return t('place.yemen')
//     //     case Place.Zagorsk:
//     //     case Place.PutoranaPlateau:
//     //     case Place.Novossibirsk:
//     //     case Place.Sakha:
//     //     case Place.LakeBaikal:
//     //     case Place.Kolyma:
//     //       return t('place.russia')
//     //     case Place.Harappa:
//     //       return t('place.pakistan')
//     //     case Place.GreatWall:
//     //     case Place.Xian:
//     //       return t('place.china')
//     //     case Place.MountEverest:
//     //       return t('place.nepal-china')
//     //     case Place.TajMahal:
//     //       return t('place.india')
//     //     case Place.Sigiriya:
//     //       return t('place.sri-lanka')
//     //     case Place.Bagan:
//     //       return t('place.myanmar')
//     //     case Place.AngkorVat:
//     //       return t('place.cambodia')
//     //     case Place.AmurRiver:
//     //       return t('place.china-russia')
//     //     case Place.BeringStrait:
//     //       return t('place.usa-russia')
//     //     case Place.MountFuji:
//     //       return t('place.japan')
//     //     case Place.Borobudur:
//     //     case Place.Sulawesi:
//     //     case Place.Papua:
//     //       return t('place.indonesia')
//     //     case Place.ArnhemLand:
//     //     case Place.BungleBungleRange:
//     //     case Place.GreatBarrierReef:
//     //     case Place.Perth:
//     //     case Place.Tasmania:
//     //       return t('place.australia')
//     //     case Place.FiordlandNationalPark:
//     //       return t('place.new-zealand')
//     default:
//       return ''
//   }
// }

export const guardianAnimalCardDescription = new GuardianAnimalCardDescription()