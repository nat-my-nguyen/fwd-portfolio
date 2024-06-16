import { useState, useEffect } from 'react'
import { restBase } from '../utilities/Utilities'
import Loading from '../utilities/Loading'
import HomeHero from '../sections/Home-hero';
import FeaturedProjects from '../sections/Home-featured';
import HomeSkills from '../sections/Home-skills';

const Home = () => {
    const [heroData, setHeroData] = useState(null)
    const [projectsData, setProjectsData] = useState(null)
    const [skillsData, setSkillsData] = useState(null)
    const [isLoaded, setLoadStatus] = useState(false)

    useEffect(() => {
        const fetchHeroData = async () => {
            const response = await fetch(restBase + 'pages/8');
            if ( response.ok ) {
                const data = await response.json();
                setHeroData(data);
            }
        }

        const fetchProjectsData = async () => {
            const response = await fetch(restBase + 'posts?_embed');
            if ( response.ok ) {
                const data = await response.json();
                setProjectsData(data);
            }
        }

        const fetchSkillsData = async () => {
            const response = await fetch(restBase + 'pages/8');
            if ( response.ok ) {
                const data = await response.json();
                setSkillsData(data);
            }
        }

        const fetchData = async () => {
            await Promise.all( [ fetchHeroData(), fetchProjectsData(), fetchSkillsData() ] );
            setLoadStatus(true);
        }

        fetchData();
    }, [])

    if ( !isLoaded ) {
        return <Loading />;
    }

    return (
        <>
            <HomeHero data={heroData}/>
            <FeaturedProjects data={projectsData}/>
            <HomeSkills data={skillsData}/>
        </>            
    )
}

export default Home