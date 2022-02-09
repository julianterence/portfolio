import React from "react"

function StartMenu(props) {
    const startMenuStyle = {
        width: 250,
        height: 350,
        position: "absolute",
        bottom: "100%",
        display: props.open ? "block" : "none"
    }

    return (
        <div className="window" style={startMenuStyle}>
            <p>menu item</p>
        </div>
    )
}

export default StartMenu