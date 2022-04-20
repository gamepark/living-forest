import Resource from "./Resource"

type Details = {
    resource: { [key in Resource]?: number }
    cost?: number
}

export default Details