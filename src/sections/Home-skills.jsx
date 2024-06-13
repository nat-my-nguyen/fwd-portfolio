import { restBase } from '../utilities/Utilities'
import Loading from '../utilities/Loading'
import { useState, useEffect } from 'react'
import loading from '../assets/loading-logo.svg';

const HomeSkills = () => {
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
            <section className="home-skills" id={`post-${restData.id}`}>
                <h2>My Skills</h2>
                <h3 className="proj-stacks txt-header">
                    <span className="txt-header">Tech Stack: </span>
                </h3>
                    {restData.acf.tech_stack}
                <h3 className="proj-stacks">
                    <span className="txt-header">Programs & Tools: </span>
                </h3>
                    {restData.acf.prog_tools}
            </section>       
        : 
            <Loading /> 
        }
        </>            
    )
}

export default HomeSkills