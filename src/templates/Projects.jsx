import { useState, useEffect } from 'react'
import { restBase } from '../utilities/Utilities'
import Loading from '../utilities/Loading'
import ProjectsList from '../components/Projects-list'

const Projects = () => {
    const [projectsData, setProjectsData] = useState(null)
    const [isLoaded, setLoadStatus] = useState(false)

    useEffect(() => {
        const fetchProjectsData = async () => {
            const response = await fetch(restBase + 'posts?_embed');
            if ( response.ok ) {
                const data = await response.json();
                setProjectsData(data);
            }
        }

        const fetchData = async () => {
            await Promise.all( [ fetchProjectsData() ] );
            setLoadStatus(true);
        }

        fetchData();
    }, [])

    if ( !isLoaded ) {
        return <Loading />;
    }

    return (
        <section className="projects-container" id={`post-${projectsData.id}`}>
            <h2>Projects</h2>
            <ProjectsList projects={projectsData} />
        </section>
    )
}

export default Projects