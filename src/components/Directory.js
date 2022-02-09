import React, {useState, useEffect, useRef} from "react"
import closedDirectory from '../images/windows-icons/directory_closed-4.png'
import openDirectory from '../images/windows-icons/directory_open_cool-0.png'
import Draggable from "react-draggable"

function Directory(props) {
    const nodeRef = React.useRef(null);
    const [IsOpen, setIsOpen] = useState(false);
    
    const handleDirectoryClick = (e) => {
        if(e.detail === 2) {
            setIsOpen(prevIsOpen => !prevIsOpen)
        }
    }

    return (
        <Draggable nodeRef={nodeRef}>
            <div ref={nodeRef} className="desktop__directory" onClick={handleDirectoryClick}>
                <img src={IsOpen ? openDirectory : closedDirectory } style={{pointerEvents: "none"}} />
                <span>CV</span>
            </div>
        </Draggable>
    )
}

export default Directory