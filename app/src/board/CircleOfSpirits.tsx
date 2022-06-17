/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { circleOfSpiritsLeft, circleOfSpiritsTop } from '../styles';
import Images from '../images/Images';
import Fires from './Fires';
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature';

type Props = {
    fire: (number | null)[]
    spirit: SpiritOfNature
}

export default function CircleOfSpirits({ fire, spirit }: Props) {

    return (
        <div css={circle}>
            <Fires fire={fire} spirit={spirit} />
        </div>
    );
}

const circle = css`
position:absolute;
width:66em;
height:66em;
top:${circleOfSpiritsTop}em;
left:${circleOfSpiritsLeft}em;
background-image: url(${Images.circleOfSpirits});
background-size:cover;
background-position:center;
`