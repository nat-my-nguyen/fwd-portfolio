import React, { useEffect, useRef } from 'react'

const ResponsiveArrow = () => {
    const arrowRef = useRef(null)

    useEffect(() => {
        const updateHREF = () => {
            if ( window.innerWidth > 768 ) {
                arrowRef.current.href = '#featured'
            } else {
                arrowRef.current.href = '#intro'
            }
        }

        updateHREF()

        //Add resize event listener
        window.addEventListener('resize', updateHREF)

        //Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateHREF)
        }
    }, [])

    return (
        <a href="#intro" ref={ arrowRef } className="down-arrow">
            <img
                
                src="/src/assets/arrow-down-solid-fontawesome.svg"
                alt="Arrow SVG icon"
            />
        </a>
    )
}

export default ResponsiveArrow