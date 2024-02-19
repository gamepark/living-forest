import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'


export const getColor = (spirit: SpiritOfNature) => {
  switch (spirit) {
    case SpiritOfNature.Winter:
      return "#7F7188";
    case SpiritOfNature.Spring:
      return "#4B9E7B";
    case SpiritOfNature.Summer:
      return "#D9D53D";
    case SpiritOfNature.Autumn:
      return "#5D3125";

  }
}