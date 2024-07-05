import { useState, useEffect } from 'react'
import { restBase } from '../utilities/Utilities'
import Loading from '../utilities/Loading'
import ProjectsList from '../components/Projects-list'
import CTAAboutContact from '../components/CTA-about-contact'

const Projects = () => {
    const [projectsData, setProjectsData] = useState(null)
    const [postsData, setPostsData] = useState(null)
    const [isLoaded, setLoadStatus] = useState(false)

    useEffect(() => {
        const fetchProjectsData = async () => {
            const response = await fetch(restBase + 'pages/11')
            if ( response.ok ) {
                const data = await response.json()
                setProjectsData(data)
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
            await Promise.all( [ fetchProjectsData(), fetchPostsData() ] )
            setLoadStatus(true)
        }

        fetchData();
    }, [])

    if ( !isLoaded ) {
        return <Loading />
    }

    return (
        <>
            <section className="page-intro projects-container projects-page">
                <h1 dangerouslySetInnerHTML={{__html:projectsData.title.rendered}} />
                <div dangerouslySetInnerHTML={{ __html: projectsData.content.rendered }} />
                <ProjectsList projects={postsData} />
            </section>
            <CTAAboutContact />
        </>
    )
}

export default Projects