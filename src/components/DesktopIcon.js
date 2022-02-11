import React, { useState, useEffect, useRef } from "react"
import Draggable from "react-draggable"

function DesktopIcon(props) {
    const nodeRef = React.useRef(null);
    const [IsOpen, setIsOpen] = useState(false);

    const handleIconClick = (e) => {
        if (e.detail === 2) {
            props.href ? window.open(props.href, '_blank').focus() : setIsOpen(prevIsOpen => !prevIsOpen)
        }
    }

    return (
        <Draggable nodeRef={nodeRef}>
            <div ref={nodeRef} className="desktop__directory" onClick={handleIconClick} style={{top: props.top}}>
                <img src={props.src} style={{ pointerEvents: "none" }} />
                <span>{props.label}</span>
            </div>
        </Draggable>
    )
}

export default DesktopIcon