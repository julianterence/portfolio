import React from "react"

function AppWindow(props) {
    return (
        <div class="window" style={{ width: "45vw" }}>
            <div class="title-bar">
                <div class="title-bar-text">{props.title}</div>
                <div class="title-bar-controls">
                    <button aria-label="Minimize"></button>
                    <button aria-label="Maximize"></button>
                    <button aria-label="Close"></button>
                </div>
            </div>
            <div class="window-body">
                <iframe src="https://github.com/julianterence" frameborder="0"></iframe>
            </div>
        </div>
    )
}

export default AppWindow