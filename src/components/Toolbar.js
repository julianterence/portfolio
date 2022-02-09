import React, {useState} from "react"
import windowsIcon from '../images/windows-icons/windows-0.png'
import StartMenu from "./StartMenu"

function Toolbar() {
    const [StartMenuOpen, setStartMenuOpen] = useState(false);
    const startMenuClasslist = StartMenuOpen ? "toolbar__start active focused" : "toolbar__start"

    return(
        <nav className="window toolbar">
            <button className={startMenuClasslist} onClick={() => setStartMenuOpen(!StartMenuOpen)}><img src={windowsIcon} /> Start</button>
            <StartMenu open={StartMenuOpen}/>
        </nav>
    )
}

export default Toolbar