import React from "react"
import { TextShadowHeading } from "../styledComponents/TextShadowHeading"

const RainbowHeading = (props) => {

    return (
        <TextShadowHeading
            textShadow={props.textShadow}
        >
            {props.children}
        </TextShadowHeading>
    )
}

export default RainbowHeading