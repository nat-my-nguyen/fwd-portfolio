import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import HomeHero from '../sections/Home-hero'
import FeaturedProjects from '../sections/Home-featured'
import HomeSkills from '../sections/Home-skills'
import Loading from '../utilities/Loading'
import { restBase } from '../utilities/Utilities'

const Home = () => {
    const [homeData, setHomeData] = useState(null)
    const [postsData, setPostsData] = useState(null)
    const [isLoaded, setLoadStatus] = useState(false)

    useEffect(() => {
        const fetchHomeData = async () => {
            const response = await fetch(restBase + 'pages/8?acf_format=standard&_embed')
            if ( response.ok ) {
                const data = await response.json()
                setHomeData(data)
            }
        }

        const fetchPostsData = async () => {
            const response = await fetch(restBase + 'posts?acf_format=standard&_embed')
            if ( response.ok ) {
                const data = await response.json()
                setPostsData(data)
            }
        }

        const fetchData = async () => {
            await Promise.all( [ fetchHomeData(), fetchPostsData() ] )
            setLoadStatus(true)
        }

        fetchData()
    }, [])

    if ( !isLoaded ) {
        return <Loading />
    }

    return (
        <>
            <Helmet prioritizeSeoTags>
                <title>{homeData.acf.meta_title}</title>
                <meta name="description" content={homeData.acf.meta_description} />
                <meta name="keywords" content={homeData.acf.meta_keywords} />
            </Helmet>
            <HomeHero data={homeData}/>
            <FeaturedProjects data={postsData}/>
            <HomeSkills data={homeData}/>
        </>            
    )
}

export default Home