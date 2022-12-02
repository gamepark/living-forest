/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import ProtectiveTree from '@gamepark/living-forest/material/ProtectiveTree'
import { HTMLAttributes } from 'react'
import Images from '../images/Images'
import { treeHeight, treeWith } from '../styles'

type Props = {
  protectiveTree: ProtectiveTree
} & HTMLAttributes<HTMLDivElement>

export default function Tree({ protectiveTree, ...props }: Props) {
  return (
    <div css={[style, front(protectiveTree)]} {...props} />
  );
}

const style = css`
  position: absolute;
  width:${treeWith}em;
  height:${treeHeight}em;
  transform-style: preserve-3d;
  transform: translateZ(0);
  -webkit-font-smoothing: subpixel-antialiased;
  transition: transform 1s ease-in-out;
  background-size: cover;
  box-shadow: 0 0 0.1em black, 0 0 0.1em black;
  border-radius: 1em;
`

const front = (protectiveTree: ProtectiveTree) => css`
background-image: url(${ProtectiveImage[protectiveTree]});
`

const ProtectiveImage: { [key in ProtectiveTree]: string } = {
  [ProtectiveTree.Tree3A]: Images.tree3A,
  [ProtectiveTree.Tree3B]: Images.tree3B,
  [ProtectiveTree.Tree4A]: Images.tree4A,
  [ProtectiveTree.Tree4B]: Images.tree4B,
  [ProtectiveTree.Tree5A]: Images.tree5A,
  [ProtectiveTree.Tree5B]: Images.tree5B,
  [ProtectiveTree.Tree6]: Images.tree6,
  [ProtectiveTree.Tree7]: Images.tree7,
  [ProtectiveTree.Tree8]: Images.tree8,
  [ProtectiveTree.Tree9]: Images.tree9,
  [ProtectiveTree.Tree10]: Images.tree10,
  [ProtectiveTree.Tree11]: Images.tree11

}