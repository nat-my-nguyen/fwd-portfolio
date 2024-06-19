import { useState, useEffect } from 'react'
import { 
    restBase,
    getLabels,
    techStackLabels,
    progToolsLabels,
    collaborationLabels,
    convertToParagraphs } from '../utilities/Utilities'
import Loading from '../utilities/Loading'
import { Link, useParams } from 'react-router-dom'


const Project = () => {
    const { slug } = useParams()
    const [projectData, setProjectData] = useState(null)
    const [isLoaded, setLoadStatus] = useState(false)

    useEffect(() => {
        const fetchProjectData = async () => {
            const response = await fetch(`${restBase}posts?slug=${slug}&_embed`)
            if ( response.ok ) {
                const data = await response.json()
                setProjectData(data[0])
                setLoadStatus(true)
            }
        };

        fetchProjectData()
    }, [slug]);

    if (!isLoaded) {
        return <Loading/>
    }

    return (
        <>
            <div className="project-detail">
                <h1 dangerouslySetInnerHTML={{ __html: projectData.title.rendered }}></h1>
                <div className="project-content">
                    <section>
                        <h2 className="txt-header">Project Requirement:</h2>
                        <p>{projectData.acf.requirements}</p>
                    </section>
                    {/* CarouselSlide goes here */}
                    <section>
                        <h3 className="txt-header">Tech Stack: </h3>
                        <p className="proj-stacks">{getLabels(projectData.acf.tech_stack, techStackLabels).join(', ')}</p>

                        <h3 className="txt-header">Programs & Tools: </h3>
                        <p className="proj-stacks">{getLabels(projectData.acf.prog_tools, progToolsLabels).join(', ')}</p>

                        <h3 className="txt-header">Collaboration: </h3>
                        <p className="proj-collaboration">{collaborationLabels[projectData.acf.collaboration]}</p>
                    </section>
                    <a href={projectData.acf.live_link}>Visit Live</a>
                    <div className="accordion-area">
                        <button className="accordion">{projectData.acf.accordion.accordion_header_insights}</button>
                        <div className="panel" dangerouslySetInnerHTML={{__html: convertToParagraphs(projectData.acf.accordion.content_insights)}}></div>

                        <button className="accordion">{projectData.acf.accordion.accordion_header_features}</button>
                        <div className="panel" dangerouslySetInnerHTML={{__html: projectData.acf.accordion.content_features}}></div>

                        <button className="accordion">{projectData.acf.accordion.accordion_header_hurdles}</button>
                        <div className="panel" dangerouslySetInnerHTML={{__html: projectData.acf.accordion.content_hurdles}}></div>
                    </div>
                    {/* Update the link to next project to proper slug */}
                    {/* <Link to={`/projects/${projectData.slug}`} className="link-btn">TITLE OF PROJECT</Link> */}
                    <Link to='/projects'>View Projects</Link>
                    <Link to='/contact'>Let's Connect</Link>
                </div>
            </div>
        </>
    );
}

export default Project