import React from "react"
import windowsIcon from '../images/windows-icons/windows-0.png'

function Toolbar() {
    return(
        <nav className="window toolbar">
            <button className="toolbar__start"><img src={windowsIcon} /> Start</button>
        </nav>
    )
}

export default Toolbar