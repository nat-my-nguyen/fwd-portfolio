import { useState, useEffect } from "react"
import Loading from '../utilities/Loading'
import { restBase } from '../utilities/Utilities'

const BackgroundPattern = () => {
    const [backgroundData, setBackgroundData] = useState(null)
    const [isLoaded, setLoadStatus] = useState(false)

    const fetchBackgroundData = async () => {
        const response = await fetch(restBase + 'pages/219?acf_format=standard&_embed')
        if ( response.ok ) {
            const data = await response.json()
            setBackgroundData(data)
            setLoadStatus(true)
        }
    }
    
    useEffect(() => {
        fetchBackgroundData()
    }, [])

    if ( !isLoaded ) {
        return <Loading />
    }

    return (
        <>
            <div 
                className="background-pattern" 
                style={{ 
                    backgroundImage: `url(${backgroundData.acf.logo_hover.url})`, 
                }} 
            />
        </>
    )
}

export default BackgroundPattern