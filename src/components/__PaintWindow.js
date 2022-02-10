import React from 'react'
import matrixWebsite from '../images/websites/matrix.png'

const PaintWindow = (props) => {
    return (
        <div class="window" style={{width: "45vw", marginBottom: "4vw"}}>
            <div class="title-bar">
                <div class="title-bar-text">{props.title}</div>
                <div class="title-bar-controls">
                    <button aria-label="Minimize"></button>
                    <button aria-label="Maximize"></button>
                    <button aria-label="Close"></button>
                </div>
            </div>
            <div class="window-body">
                <img style={{width: "100%", height: "auto"}} src={matrixWebsite} />
            </div>
        </div>
    )
}

export default PaintWindow