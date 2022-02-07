import React, {useState, useEffect, useRef} from "react"
import directory from '../images/windows-icons/directory_closed-4.png'
import Draggable from "react-draggable"

function Directory(props) {
    const nodeRef = React.useRef(null);
    
    return (
        <Draggable nodeRef={nodeRef}>
            <div ref={nodeRef} className="desktop__directory">
                <img src={directory} style={{pointerEvents: "none"}} />
                <span>CV</span>
            </div>
        </Draggable>
    )
}

export default Directory