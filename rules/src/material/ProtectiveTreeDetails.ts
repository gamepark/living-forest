import Resource from "./Resource"
import ProtectiveTree from './ProtectiveTree';
import { Tree3A, Tree3B, Tree4A, Tree4B, Tree5A, Tree5B, Tree6, Tree7, Tree8, Tree9, Tree10, Tree11 } from './ProtectivesTrees';

type ProtectiveTreeDetails = {
    resource: { [key in Resource]?: number }
    cost?: number
}

export default ProtectiveTreeDetails

export function getProtectiveTreeDetails(protectiveTree: ProtectiveTree): ProtectiveTreeDetails {
    switch (protectiveTree) {
        case ProtectiveTree.Tree3A:
            return Tree3A
        case ProtectiveTree.Tree3B:
            return Tree3B
        case ProtectiveTree.Tree4A:
            return Tree4A
        case ProtectiveTree.Tree4B:
            return Tree4B
        case ProtectiveTree.Tree5A:
            return Tree5A
        case ProtectiveTree.Tree5B:
            return Tree5B
        case ProtectiveTree.Tree6:
            return Tree6
        case ProtectiveTree.Tree7:
            return Tree7
        case ProtectiveTree.Tree8:
            return Tree8
        case ProtectiveTree.Tree9:
            return Tree9
        case ProtectiveTree.Tree10:
            return Tree10
        case ProtectiveTree.Tree11:
            return Tree11
    }
}