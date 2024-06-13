import { restBase } from '../utilities/Utilities'
import Loading from '../utilities/Loading'
import { useState, useEffect } from 'react'
import loading from '../assets/loading-logo.svg';

const HomeHero = () => {
    const restPath = restBase + 'pages/8'
    const [restData, setData] = useState([])
    const [isLoaded, setLoadStatus] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restPath)
            if ( response.ok ) {
                const data = await response.json()
                setData(data)
                setLoadStatus(true)
            } else {
                setLoadStatus(false)
            }
        }
        fetchData()
    }, [restPath])
    
    return (
        <>
        { isLoaded ?
            <section className="home-hero" id={`post-${restData.id}`}>
                <h1 dangerouslySetInnerHTML={{__html:restData.title.rendered}}></h1>
                <p className="hero-quote">{restData.acf.hero_quote}</p>
                <p className="hero-intro">{restData.acf.hero_intro}</p>
                {/* <img src={loading} alt="Loading" className="loading" id="loading" /> */}
            </section>       
        : 
            <Loading /> 
        }
        </>            
    )
}

export default HomeHero