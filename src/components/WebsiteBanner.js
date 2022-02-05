import React, {useState, useEffect, useRef} from 'react'
import RainbowHeading from './RainbowHeading'

const WebsiteBanner = (props) => {
    const MIDPOINT_BUFFER = 100
    const [mousePosition, setMousePosition] = useState({
        left: 0,
        top: 0
    })
    const [polarity, setPolarity] = useState({
        x: "+",
        y: "+"
    })
    const [textShadow, setTextShadow] = useState("")
    const [XLowBound, setXLowBound] = useState();
    const [XUpBound, setXUpBound] = useState();
    const [YLowBound, setYLowBound] = useState();
    const [YUpBound, setYUpBound] = useState();
    const pageHeader = useRef(null)

    const setHeaderDimensions = (width, height) => {
        let widthMidpoint = width / 2
        let heightMidpoint = height / 2
        setXLowBound(widthMidpoint - MIDPOINT_BUFFER)
        setXUpBound(widthMidpoint + MIDPOINT_BUFFER)
        setYLowBound(heightMidpoint - MIDPOINT_BUFFER)
        setYUpBound(heightMidpoint + MIDPOINT_BUFFER)
    }


    const RAINBOW_COLORS = ['red', 'orange', 'yellow', 'green', 'blue', 'pink', 'purple']
    const RAINBOW_CHUNK_LENGTH = 4
    const SHADOW_LENGTH = RAINBOW_CHUNK_LENGTH * RAINBOW_COLORS.length

    const handleMouseMove = (e) => {
        setMousePosition({
            left: e.pageX,
            top: e.pageY
        })

        if(e.pageX < XLowBound) {
            if(e.pageY < YLowBound) {
                setPolarity({
                    x: '-',
                    y: '-'
                })
            } else if(e.pageY > YLowBound && e.pageY < YUpBound) {
                setPolarity(prevPolarity => ({
                    x: '-',
                    y: '.'
                }))
            } else if(e.pageY > YUpBound) {
                setPolarity(prevPolarity => ({
                    x: '-',
                    y: '+'
                }))
            }
        } else if(e.pageX > XLowBound && e.pageX < XUpBound) {
            if(e.pageY < YLowBound) {
                setPolarity(prevPolarity => ({
                    x: '.',
                    y: '-'
                }))
            } else if(e.pageY > YLowBound && e.pageY < YUpBound) {
                setPolarity(prevPolarity => ({
                    x: '.',
                    y: '.'
                }))
            } else if(e.pageY > YUpBound) {
                setPolarity(prevPolarity => ({
                    x: '.',
                    y: '+'
                }))
            }
        } else if(e.pageX > XUpBound) {
            if(e.pageY < YLowBound) {
                setPolarity(prevPolarity => ({
                    x: '+',
                    y: '-'
                }))
            } else if(e.pageY > YLowBound && e.pageY < YUpBound) {
                setPolarity(prevPolarity => ({
                    x: '+',
                    y: '.'
                }))
            } else if(e.pageY > YUpBound) {
                setPolarity(prevPolarity => ({
                    x: '+',
                    y: '+'
                }))
            }
        }
    }

    const resetTextShadow = () => {
        setTextShadow("0px 0px transparent")
    }

    const updateTextShadow = () => {
        resetTextShadow()
        setTextShadow(prevTextShadow => {
            let newTextShadow = prevTextShadow;
            for(let i = 1; i <= SHADOW_LENGTH; i++) {
                let chunkColor = RAINBOW_COLORS[Math.floor((i-1)/RAINBOW_CHUNK_LENGTH)];
                newTextShadow += `, ${polarity.x}${i}px ${polarity.y}${i}px ${chunkColor}`
            }
            return newTextShadow
        })
    }

    useEffect(() => {
        updateTextShadow()
    }, [mousePosition]);
    
    useEffect(() => {
        setHeaderDimensions(pageHeader.current.clientWidth, pageHeader.current.clientHeight)
    }, []);
    
    return (
        <header ref={pageHeader} onMouseMove={handleMouseMove}>
            <RainbowHeading textShadow={textShadow}>
                {props.title}
            </RainbowHeading>
        </header>
    )
}

export default WebsiteBanner