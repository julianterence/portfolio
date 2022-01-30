import React, {useEffect, useState} from "react"
import {TextShadowHeading} from "../styledComponents/TextShadowHeading"

const RainbowHeading = (props) => {
    const [polarity, setPolarity] = useState({
        x: "+",
        y: "+"
    })
    const [textShadow, setTextShadow] = useState("0px 0px transparent")
    
    const RAINBOW_COLORS = ['red', 'orange', 'yellow', 'green', 'blue', 'pink', 'purple']
    const RAINBOW_CHUNK_LENGTH = 4
    const SHADOW_LENGTH = RAINBOW_CHUNK_LENGTH * RAINBOW_COLORS.length
    
    const WINDOW_DIMENSIONS = [window.innerWidth, window.innerHeight]
    const WIDTH_MIDPOINT = WINDOW_DIMENSIONS[0] / 2
    const HEIGHT_MIDPOINT = WINDOW_DIMENSIONS[1] / 2
    const MIDPOINT_BUFFER = 100
    let poleX, poleY;
    
    
    useEffect(() => {
        setTextShadow(prevTextShadow => {
            let newTextShadow = prevTextShadow;
            for(let i = 1; i <= SHADOW_LENGTH; i++) {
                let chunkColor = RAINBOW_COLORS[Math.floor((i-1)/RAINBOW_CHUNK_LENGTH)];
                newTextShadow += `, ${polarity.x}${i}px ${polarity.y}${i}px ${chunkColor}`
            }
            return newTextShadow
        })
    }, []);
    
    
    return (
        <TextShadowHeading
            textShadow={textShadow}
        >
        {props.children}
        </TextShadowHeading>
        )
    }
    
    export default RainbowHeading
    
    
    
    // const headingElement = document.querySelector('h1')
    // let textShadow = ''
    
    
    
    // document.addEventListener('mousemove', (e) => {
    //   if(e.clientX > WIDTH_MIDPOINT - MIDPOINT_BUFFER && e.clientX < WIDTH_MIDPOINT + MIDPOINT_BUFFER) {
    //     poleX = '.'
    //   } else if(e.clientX < WIDTH_MIDPOINT) {
    //     poleX = '-'
    //   } else {
    //     poleX = '+'
    //   }
    
    //   if(e.clientY > HEIGHT_MIDPOINT - MIDPOINT_BUFFER && e.clientY < HEIGHT_MIDPOINT + MIDPOINT_BUFFER) {
    //     poleY = '.'
    //   } else if(e.clientY < HEIGHT_MIDPOINT) {
    //     poleY = '-'
    //   } else {
    //     poleY = '+'
    //   }
    
    //   if(poleX !== polarity.x || poleY !== polarity.y){
    //     updatePolarity(poleX, poleY)
    //     updateTextShadow()
    //   }
    // })
    
    // const updatePolarity = (x, y) => {
    //   console.log('updated')
    //   polarity.x = x
    //   polarity.y = y
    // }
    
    // const resetTextShadow = () => {
    //   textShadow = '0 0 transparent'
    // }
    
    // const updateTextShadow = () => {
    //   resetTextShadow();
    //   for(let i = 1; i <= SHADOW_LENGTH; i++) {
    //     let chunkColor = RAINBOW_COLORS[Math.floor((i-1)/RAINBOW_CHUNK_LENGTH)];
    //     let chunkPos = polarity.x === '.' ? 0 : i
    //     textShadow += 
    //       ` ,
    //           ${polarity.x}${chunkPos}px 
    //           ${polarity.y}${i}px 
    //           1px 
    //           ${chunkColor}
    //          `
    //   }
    //   headingElement.style.textShadow = textShadow
    // }
    
    // updateTextShadow()