import { useState, useEffect } from 'react'
import { restBase } from '../utilities/Utilities'
import Loading from '../utilities/Loading'
import HomeHero from '../sections/Home-hero'
import FeaturedProjects from '../sections/Home-featured'
import HomeSkills from '../sections/Home-skills'

const Home = () => {
    const [homeData, setHomeData] = useState(null)
    const [postsData, setPostsData] = useState(null)
    const [isLoaded, setLoadStatus] = useState(false)

    useEffect(() => {
        const fetchHomeData = async () => {
            const response = await fetch(restBase + 'pages/8')
            if ( response.ok ) {
                const data = await response.json()
                setHomeData(data)
            }
        }

        const fetchPostsData = async () => {
            const response = await fetch(restBase + 'posts?_embed')
            if ( response.ok ) {
                const data = await response.json()
                setPostsData(data)
            }
        }

        const fetchData = async () => {
            await Promise.all( [ fetchHomeData(), fetchPostsData() ] )
            setLoadStatus(true)
        }

        fetchData();
    }, [])

    if ( !isLoaded ) {
        return <Loading />
    }

    return (
        <>
            <HomeHero data={homeData}/>
            <FeaturedProjects data={postsData}/>
            <HomeSkills data={homeData}/>
        </>            
    )
}

export default Home