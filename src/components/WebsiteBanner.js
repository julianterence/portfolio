import React, {useState} from 'react'
import RainbowHeading from './RainbowHeading'

const WebsiteBanner = (props) => {
    const [mousePosition, setMousePosition] = useState({
        left: 0,
        top: 0
    })

    const handleMouseMove = (event) => {
        setMousePosition({
            left: event.pageX,
            top: event.pageY
        })
    }

    return (
        <header onMouseMove={handleMouseMove}>
            <RainbowHeading>
                {props.title}
            </RainbowHeading>
        </header>
    )
}

export default WebsiteBanner